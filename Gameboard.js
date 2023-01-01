export default function GameBoard() {
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
                if(typeof grid == 'object') {
                    const shipName = grid.getName().charAt(0).toUpperCase();
                    rendered = `${rendered} ${String(shipName).padStart(3, " ")}`;
                }
                else {
                    rendered = `${rendered} ${String(grid).padStart(3, " ")}`;
                }
            }
        }

        console.log(rendered);
    };

    function getBoard() {
        return board;
    }

    function placeShip(ship, coordStart, orientation) {

        if(orientation == 'h') {
            const rowIdx = coordStart[0];
            const colStart = coordStart[1];
            const colEnd = colStart + shipLength[ship.getName()];

            // (9,0), (9, 1), (9, 2) ...
            for (let i = colStart; i < colEnd; i++) {
                if(board[rowIdx][i] !== '-') {
                    throw new Error(`(${rowIdx},${i}) already has a ship!`);
                }

                board[rowIdx][i] = ship;
            }
        }
        else if(orientation == 'v') {
            const rowStart = coordStart[0];
            const rowEnd = coordStart[0] + shipLength[ship.getName()];
            const colIdx = coordStart[1];

            for (let i = rowStart; i < rowEnd; i++) {
                if(board[i][colIdx] !== '-') {
                    throw new Error(`(${rowIdx},${i}) already has a ship!`);
                }

                board[i][colIdx] = ship;
            }
        }
    }

    function receiveAttack(position) {
        // check position for ship
        const targetedTile = board[position[0]][position[1]];
        
        if(typeof targetedTile == 'object') {
            // check ship still afloat
            if(!targetedTile.isSunk()) {
                targetedTile.hit();
            }
        } 
        else {
            return {
                status: 'Missed',
                coords: position
            }
        }

    }

    return {
        getBoard,
        renderBoard,
        placeShip,
        receiveAttack
    }
}

// const board = GameBoard();

// console.table(board.getBoard());
