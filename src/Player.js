import GameBoard from './Gameboard';
import Ship from './Ship';

export default function Player(name) {
    // BOTTOM grid: players' own ships
    // TOP grid: players' targetting grid for recording attacks on the enemy

    const ships = {
        carrier: Ship('carrier'),
        battleship: Ship('battleship'),
        cruiser: Ship('cruiser'),
        submarine: Ship('submarine'),
        destroyer: Ship('destroyer'),
    };

    const hits = new Set();
    const misses = new Set();
    const gridRoulette = [];

    const board = {
        top: GameBoard(),
        bottom: GameBoard(),
    };

    const allShipsPlaced = () => Object.values(ships).every((ship) => ship.placed === true);

    const resetBoard = () => {
        board.top = GameBoard();
        board.bottom = GameBoard();
    };

    const resetShips = () => {
        ships.carrier = Ship('carrier');
        ships.battleship = Ship('battleship');
        ships.cruiser = Ship('cruiser');
        ships.submarine = Ship('submarine');
        ships.destroyer = Ship('destroyer');
    };

    const placeShip = (shipName, basisPosition, orientation) => {
        board.bottom.placeShip(ships[shipName], basisPosition, orientation);
        ships[shipName].placed = true;
    };

    const setupBottomBoardSpreadOut = () => {
        // full fleet to be placed
        placeShip('carrier', [2, 4], 'h');
        placeShip('battleship', [8, 6], 'h');
        placeShip('cruiser', [2, 2], 'v');
        placeShip('submarine', [5, 4], 'v');
        placeShip('destroyer', [8, 1], 'v');
    };

    const setupBottomBoard = () => {
        board.bottom.placeShip(ships.carrier, [0, 0], 'v');
        board.bottom.placeShip(ships.battleship, [0, 1], 'v');
        board.bottom.placeShip(ships.cruiser, [0, 2], 'v');
        board.bottom.placeShip(ships.submarine, [0, 3], 'v');
        board.bottom.placeShip(ships.destroyer, [0, 4], 'v');
    };

    const randCoord = (max) => {
        const randY = Math.floor(Math.random() * max);
        const randX = Math.floor(Math.random() * max);

        const attackCoords = [randY, randX];
        return attackCoords;
    };

    const setupBottomBoardRandom = () => {
        const orientationOptions = ['h', 'v'];

        Object.values(ships).forEach((ship) => {
            let tries = 0;

            while (tries < 100) {
                const randCoords = randCoord(10);
                const orientation =
                    orientationOptions[Math.floor(Math.random() * orientationOptions.length)];
                try {
                    // console.log(randCoords);
                    // console.log(`Orientation: ${orientation}`);
                    board.bottom.placeShip(ship, randCoords, orientation);
                    ships[ship.getName()].placed = true;
                    break;
                }
                catch (error) {
                    // console.log(error);
                }
                finally {
                    tries += 1;
                }
            }
        });

        if (allShipsPlaced() !== true) {
            throw new Error('Ship randomisation failed!');
        }
    };

    // render both top and bottom boards
    const renderPlayerBoards = () => {
        const topBoardTitle = 'TARGETTING'.padStart(26, ' ');
        const bottomBoardTitle = `${name.toUpperCase()} SHIPS`.padStart(28, ' ');
        const combinedRender = `${topBoardTitle}${board.top.renderBoard()}\n${bottomBoardTitle}${board.bottom.renderBoard()}`;
    };

    function* playNextMovePreset() {
        yield [0, 4];
        yield [0, 5];
    }

    const playNextMove = () => {
        function isMoveLegal(_move) {
            const y = _move[0];
            const x = _move[1];
            if (x >= 0 && x < 10 && y >= 0 && y < 10) {
                return true;
            }
            return false;
        }
        // find the current hits
        const parseHits = Array.from(hits).map((hit) => JSON.parse(hit));
        // console.log(parseHits);

        // make an attack adjacent to a current hit
        while (parseHits.length > 0) {
            const move = parseHits.shift(0);
            const y = move[0];
            const x = move[1];

            const validMoves = [];

            // all moves adjacent to (y, x)
            const enumerateMoves = [
                [y - 1, x], // North of
                [y, x + 1], // East of
                [y + 1, x], // South of
                [y, x - 1], // West of
            ];

            // find adjacent moves that haven't already been played
            enumerateMoves.forEach((coord) => {
                if (
                    isMoveLegal(coord) &&
                    !hits.has(JSON.stringify(coord)) &&
                    !misses.has(JSON.stringify(coord))
                ) {
                    validMoves.push(coord);
                }
            });

            // return the move if it exists
            if (validMoves.length > 0) {
                return validMoves.shift(0);
            }
        }

        // if no adjacent-hit move exist, attack a random space that hasn't previously been attacked
        let smartMove = false;
        let randomMove;

        // continue generating random coordinates until an unplayed move is found
        while (!smartMove) {
            randomMove = randCoord(10);
            if (
                isMoveLegal(randomMove) &&
                !hits.has(JSON.stringify(randomMove)) &&
                !misses.has(JSON.stringify(randomMove))
            ) {
                smartMove = true;
            }
            else {
                gridRoulette.push(randomMove);
                // console.log(`Move ${randomMove} seen before!`);
            }
        }
        if (smartMove) return randomMove;
    };

    const addHit = (coord) => {
        hits.add(JSON.stringify(coord));
    };

    const addMiss = (coord) => {
        misses.add(JSON.stringify(coord));
    };

    const getMisses = () => misses;
    const getHits = () => hits;
    const getRoulette = () => gridRoulette;

    const getAllPreviousAttacks = () => new Set([...hits, ...misses]);

    const stats = () => {
        const totalMisses = getMisses().size;
        const totalHits = getHits().size;
        const totalAttacks = totalMisses + totalHits;
        const totalRandomAttempts = getRoulette().length;

        return {
            totalMisses,
            totalHits,
            totalAttacks,
            totalRandomAttempts,
        };
    };

    const instance = {
        name,
        board,
        ships,
        placeShip,
        setupBottomBoard,
        setupBottomBoardSpreadOut,
        setupBottomBoardRandom,
        renderPlayerBoards,
        playNextMove,
        playNextMovePreset,
        addHit,
        addMiss,
        getAllPreviousAttacks,
        getMisses,
        getHits,
        getRoulette,
        stats,
        resetBoard,
        resetShips,
        allShipsPlaced,
    };

    return instance;
}
