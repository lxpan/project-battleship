/* View.js is our DOM module */

export default function View() {
    // give View access to game logic

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

    function renderShips(boardArr, whichDOMGrid, reset = false) {
        const divGrids = Array.from(
            document.querySelectorAll(`.battleship-grid.${whichDOMGrid} div`),
        );

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let boardGrid = null;
                if (boardArr) {
                    boardGrid = boardArr[i][j];
                }

                // get the div that corresponds to the position in the array
                const div = divGrids[i * 10 + j];
                // assign coords to data attribute (used later for attacks)
                div.dataset.gridCoord = JSON.stringify([i, j]);

                // mark it as a ship div
                if (boardArr && boardGrid.getName) {
                    div.classList.add('ship');
                }

                if (reset) {
                    div.classList = '';
                }
            }
        }
    }

    function addGridListeners(callback, topBoard, bottomBoard) {
        function renderTargettingGrid() {
            const divGrids = Array.from(document.querySelectorAll(`.battleship-grid.top div`));

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const boardGrid = topBoard[i][j];
                    const grid = divGrids[i * 10 + j];

                    if (boardGrid === 'H') {
                        grid.classList.add('hit');
                    }
                    else if (boardGrid === 'x') {
                        grid.classList.add('miss');
                    }
                }
            }
        }

        function updateBottomGrid() {
            const gridDivs = Array.from(document.querySelectorAll(`.battleship-grid.bottom div`));

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const boardGrid = bottomBoard[i][j];

                    // get the div that corresponds to the position in the array
                    const div = gridDivs[i * 10 + j];
                    // assign coords to data attribute (used later for attacks)
                    // div.dataset.gridCoord = JSON.stringify([i, j]);

                    if (boardGrid.getName && boardGrid.positionsHit.has(JSON.stringify([i, j]))) {
                        div.classList.add('hit');
                    }
                }
            }
        }

        const divGrids = Array.from(document.querySelectorAll(`.battleship-grid.top div`));

        divGrids.forEach((grid) => {
            grid.addEventListener('click', () => {
                if (grid.classList.contains('hit') || grid.classList.contains('miss')) {
                    return;
                }

                callback.playTurn(JSON.parse(grid.dataset.gridCoord));
                callback.printBoards();
                // update the targetting (top) grid after attack is played
                renderTargettingGrid();
                // update player's view (bottom grid) - AI moves straight after
                updateBottomGrid();
            });
        });
    }

    function addEventListeners(app) {
        const newGameBtn = document.getElementById('new-game-btn');
        const placeShipBtn = document.getElementById('place-ships-btn');

        const deregisterGridListeners = () => {
            const divGrids = Array.from(document.querySelectorAll(`.battleship-grid.top div`));
            divGrids.forEach((grid) => {
                // get rid of all existing listeners by replacing div with own deep clone
                grid.replaceWith(grid.cloneNode(true));
            });
        };

        const prepareNewGame = () => {
            const gridContainer = document.querySelector('.grid-container');
            // unhide the game grids and "Place Ship" button
            gridContainer.classList.remove('hide');
            placeShipBtn.classList.remove('hide');

            app.resetGame();
            deregisterGridListeners();

            // register grid event listeners, with the newly initialised boards
            addGridListeners(
                app,
                app.playerOne.board.top.getBoard(),
                app.playerOne.board.bottom.getBoard(),
            );

            // reset display grids
            renderShips(null, 'bottom', true);
            renderShips(null, 'top', true);
        };

        const placeShipsDialog = () => {
            console.log('Placing carrier...');
        };

        newGameBtn.addEventListener('click', prepareNewGame);
        placeShipBtn.addEventListener('click', placeShipsDialog);
    }

    return {
        createGrid,
        renderShips,
        addGridListeners,
        addEventListeners,
    };
}
