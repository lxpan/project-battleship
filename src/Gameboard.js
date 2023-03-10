export default function GameBoard() {
    // keep track of missed attacks
    const misses = new Set();
    const hits = new Set();
    const shipsSunk = [];

    // ship length used to perform ship placement
    const boardSize = 10;

    function createBoard() {
        const _board = [];
        for (let i = 0; i < boardSize; i++) {
            // note that board[i] refers to Y coordinates, i.e. rows
            _board.push(Array(boardSize).fill('-'));
        }

        return _board;
    }

    const board = createBoard();

    function renderBoard() {
        let rendered = '';
        const hitSymbol = '!';

        for (let i = 0; i < boardSize; i++) {
            rendered += '\n';

            for (let j = 0; j < boardSize; j++) {
                const grid = board[i][j];

                // check if a ship present at current coords
                if (grid.getName) {
                    const shipName = grid.getSymbol();
                    // if ship hit at location, then modify ship symbol with '!'
                    const shipSymbol = hits.has(JSON.stringify([i, j]))
                        ? shipName + hitSymbol
                        : shipName;

                    rendered = `${rendered} ${String(shipSymbol).padStart(3, ' ')}`;
                    // if a shot miss has been registered at current coords
                }
                else {
                    rendered = `${rendered} ${String(grid).padStart(3, ' ')}`;
                }
            }
        }
        return rendered;
        // console.log(rendered);
    }

    function getBoard() {
        return board;
    }

    function getTile(posY, posX) {
        return board[posY][posX];
    }

    function setTile(gridCoord, value) {
        board[gridCoord[0]][gridCoord[1]] = value;
    }

    function getMisses() {
        return misses;
    }

    function placeShip(ship, coordStart, orientation) {
        // currently only works for rows / horizontal traversal
        function* boardTileGenerator() {
            if (orientation === 'h') {
                const rowIdx = coordStart[0];
                const colStart = coordStart[1];
                const colEnd = colStart + ship.length;

                // fix row, traverse columns
                for (let i = colStart; i < colEnd; i++) {
                    yield {
                        value: board[rowIdx][i],
                        rowIdx,
                        i,
                    };
                }
            }
            else if (orientation === 'v') {
                const rowStart = coordStart[0];
                const rowEnd = coordStart[0] + ship.length;
                const colIdx = coordStart[1];

                // fix column, traverse rows
                for (let i = rowStart; i < rowEnd; i++) {
                    yield {
                        value: board[i][colIdx],
                        colIdx,
                        i,
                    };
                }
            }
        }

        const checkPlacementForExistingShips = () => {
            const gen = boardTileGenerator();

            for (const tile of gen) {
                if (tile.value !== '-') {
                    throw new Error('Tile is not empty!');
                }
            }
        };

        const performShipPlacement = () => {
            const gen = boardTileGenerator();

            if (orientation === 'h') {
                for (const tile of gen) {
                    board[tile.rowIdx][tile.i] = ship;
                }
            }
            else if (orientation === 'v') {
                const _gen = boardTileGenerator();

                for (const tile of _gen) {
                    board[tile.i][tile.colIdx] = ship;
                }
            }
        };

        checkPlacementForExistingShips();
        performShipPlacement();
    }

    function receiveAttack(position) {
        const targetedTile = board[position[0]][position[1]];

        // check position for ship object
        if (targetedTile.getName) {
            // check tile hasn't already been hit and ship still afloat
            if (!hits.has(JSON.stringify(position)) && !targetedTile.isSunk()) {
                const shipAtTile = targetedTile;

                shipAtTile.hit();
                // register that ship has been hit +1
                hits.add(JSON.stringify(position));
                // record the position where the ship was hit
                shipAtTile.positionsHit.add(JSON.stringify([position[0], position[1]]));

                if (shipAtTile.isSunk()) {
                    shipsSunk.push(shipAtTile.getName());
                }

                return {
                    status: 'Hit',
                    coords: position,
                };
            }
        }
        // handle misses
        else if (typeof targetedTile === 'string') {
            misses.add(JSON.stringify(position));
            // console.log(missed);

            return {
                status: 'Missed',
                coords: position,
            };
        }
        else {
            return {
                status: 'Error',
                coords: position,
            };
        }
    }

    function getShipsSunk() {
        return shipsSunk;
    }

    function haveAllShipsSunk() {
        return new Set(shipsSunk).size === 5;
    }

    return {
        getBoard,
        getTile,
        setTile,
        getMisses,
        renderBoard,
        placeShip,
        receiveAttack,
        getShipsSunk,
        haveAllShipsSunk,
    };
}
