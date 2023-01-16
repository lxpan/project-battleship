import GameBoard from './Gameboard';
import Ship from './Ship';

export default function Player(name) {
    // BOTTOM grid: players' own ships
    // TOP grid: players' targetting grid for recording attacks on the enemy

    const hits = new Set();
    const misses = new Set();
    const gridRoulette = [];

    const board = {
        top: GameBoard(),
        bottom: GameBoard(),
    };

    const resetBoard = () => {
        board.top = GameBoard();
        board.bottom = GameBoard();
    };

    const setupBottomBoardSpreadOut = () => {
        // full fleet to be placed
        const carrier = Ship('carrier');
        const battleship = Ship('battleship');
        const cruiser = Ship('cruiser');
        const submarine = Ship('submarine');
        const destroyer = Ship('destroyer');

        board.bottom.placeShip(carrier, [2, 4], 'h');
        board.bottom.placeShip(battleship, [8, 6], 'h');
        board.bottom.placeShip(cruiser, [2, 2], 'v');
        board.bottom.placeShip(submarine, [5, 4], 'v');
        board.bottom.placeShip(destroyer, [8, 1], 'v');
    };

    const setupBottomBoard = () => {
        const carrier = Ship('carrier');
        const battleship = Ship('battleship');
        const cruiser = Ship('cruiser');
        const submarine = Ship('submarine');
        const destroyer = Ship('destroyer');

        board.bottom.placeShip(carrier, [0, 0], 'v');
        board.bottom.placeShip(battleship, [0, 1], 'v');
        board.bottom.placeShip(cruiser, [0, 2], 'v');
        board.bottom.placeShip(submarine, [0, 3], 'v');
        board.bottom.placeShip(destroyer, [0, 4], 'v');
    };

    // render both top and bottom boards
    const renderPlayerBoards = () => {
        const topBoardTitle = 'TARGETTING'.padStart(26, ' ');
        const bottomBoardTitle = `${name.toUpperCase()} SHIPS`.padStart(28, ' ');
        const combinedRender = `${topBoardTitle}${board.top.renderBoard()}\n${bottomBoardTitle}${board.bottom.renderBoard()}`;
        console.log(combinedRender);
    };

    function* playNextMovePreset() {
        yield [0, 4];
        yield [0, 5];
    }

    const randCoord = (max) => {
        const randY = Math.floor(Math.random() * max);
        const randX = Math.floor(Math.random() * max);

        const attackCoords = [randY, randX];
        return attackCoords;
    };

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
                    isMoveLegal(coord)
                    && !hits.has(JSON.stringify(coord))
                    && !misses.has(JSON.stringify(coord))
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
                isMoveLegal(randomMove)
                && !hits.has(JSON.stringify(randomMove))
                && !misses.has(JSON.stringify(randomMove))
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
        setupBottomBoard,
        setupBottomBoardSpreadOut,
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
    };

    return instance;
}
