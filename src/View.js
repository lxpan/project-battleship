/* View.js is our DOM module */

export default (function View() {
    function test() {
        console.log('Loading View');
    }

    function createGrid(gridY, gridX) {
        const battleshipGridTop = document.querySelector('.battleship-grid.top');
        const battleshipGridBottom = document.querySelector('.battleship-grid.bottom');

        for (let i = 0; i < gridY * gridX; i++) {
            const gridDiv = document.createElement('div');
            battleshipGridTop.appendChild(gridDiv);
        }

        for (let i = 0; i < gridY * gridX; i++) {
            const gridDiv = document.createElement('div');
            battleshipGridBottom.appendChild(gridDiv);
        }
    }

    function renderShips(boardArr, whichDOMGrid, callback) {
        const divGrids = Array.from(
            document.querySelectorAll(`.battleship-grid.${whichDOMGrid} div`),
        );

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const boardGrid = boardArr[i][j];

                // get the div that corresponds to the position in the array
                const div = divGrids[i * 10 + j];
                // assign coords to data attribute (used later for attacks)
                div.dataset.gridCoord = JSON.stringify([i, j]);

                // mark it as a ship div
                if (boardGrid.getName) {
                    div.classList.add('ship');
                }
            }
        }
    }

    function addAttackListeners(callback, boardArr) {
        function renderTargettingGrid() {
            const divGrids = Array.from(document.querySelectorAll(`.battleship-grid.top div`));

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const boardGrid = boardArr[i][j];
                    const grid = divGrids[i * 10 + j];

                    if (boardGrid === 'H') {
                        grid.textContent = 'H';
                    }
                    else if (boardGrid === 'x') {
                        grid.textContent = 'x';
                    }
                }
            }
        }

        const divGrids = Array.from(document.querySelectorAll(`.battleship-grid.top div`));

        divGrids.forEach((grid) => {
            grid.addEventListener('click', () => {
                callback.playTurn(JSON.parse(grid.dataset.gridCoord));
                callback.printBoards();
                // re-render ships
                renderTargettingGrid();
            });
        });
    }

    return {
        createGrid,
        test,
        renderShips,
        addAttackListeners,
    };
}());
