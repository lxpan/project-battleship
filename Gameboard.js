export default function GameBoard() {
    // keep track of missed attacks
    const misses = new Set();
    const hits = new Set();
    const shipsSunk = [];

    // ship length used to perform ship placement
    const shipLength = {
        carrier: 5,
        battleship: 4,
        cruiser: 3,
        submarine: 3,
        destroyer: 2,
    };

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

        for (const row of board) {
            rendered = rendered + '\n';

            for (const grid of row) {
                if (typeof grid == 'object') {
                    const shipName = grid.getName().charAt(0).toUpperCase();
                    const shipSymbol = grid.isSunk() ? shipName + 'x' : shipName;

                    rendered = `${rendered} ${String(shipSymbol).padStart(
                        3,
                        ' '
                    )}`;
                } else {
                    rendered = `${rendered} ${String(grid).padStart(3, ' ')}`;
                }
            }
        }

        console.log(rendered);
    }

    function getBoard() {
        return board;
    }

    function getTile(posY, posX) {
        return board[posY][posX];
    }

    function placeShip(ship, coordStart, orientation) {
        // currently only works for rows / horizontal traversal
        function* boardTileGenerator() {
            if (orientation === 'h') {
                const rowIdx = coordStart[0];
                const colStart = coordStart[1];
                const colEnd = colStart + shipLength[ship.getName()];

                // fix row, traverse columns
                for (let i = colStart; i < colEnd; i++) {
                    yield {
                        value: board[rowIdx][i],
                        rowIdx,
                        i,
                    };
                }
            } else if (orientation === 'v') {
                const rowStart = coordStart[0];
                const rowEnd = coordStart[0] + shipLength[ship.getName()];
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
                    throw new Error(`Tile is not empty!`);
                }
            }
        };

        const performShipPlacement = () => {
            const gen = boardTileGenerator();

            if (orientation == 'h') {
                for (const tile of gen) {
                    board[tile.rowIdx][tile.i] = ship;
                }
            } else if (orientation == 'v') {
                const gen = boardTileGenerator();

                for (const tile of gen) {
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
        if (typeof targetedTile == 'object') {
            // check tile hasn't already been hit and ship still afloat
            if (!hits.has(JSON.stringify(position)) && !targetedTile.isSunk()) {
                const shipAtTile = targetedTile;
                shipAtTile.hit();
                hits.add(JSON.stringify(position));

                if(shipAtTile.isSunk()) {
                    shipsSunk.push(shipAtTile.getName());
                }
            }
        }
        // handle misses
        else {
            misses.add(JSON.stringify(position));
            // console.log(missed);

            return {
                status: 'Missed',
                coords: position,
            };
        }
    }

    function getShipsSunk() {
        return shipsSunk;
    }

    return {
        getBoard,
        getTile,
        renderBoard,
        placeShip,
        receiveAttack,
        getShipsSunk
    };
}
