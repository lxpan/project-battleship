/* View.js is our DOM module */
export default function View() {
    let shipToPlace = null;
    let shipOrientation = 'h';
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

                callback.playTurn(JSON.parse(grid.dataset.gridCoord), callback.playComputerMove());
                callback.printBoards();
                // update the targetting (top) grid after attack is played
                renderTargettingGrid();
                // update player's view (bottom grid) - AI moves straight after
                updateBottomGrid();
            });
        });
    }

    function roundToNearest10(number) {
        if (number % 10 === 0) {
            return number + 10;
        }

        return Math.ceil(number / 10) * 10;
    }

    function addEventListeners(app) {
        const SHIP_LENGTH = {
            carrier: 5,
            battleship: 4,
            cruiser: 3,
            submarine: 3,
            destroyer: 2,
        };
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
            renderShips(app.playerOne.board.bottom.getBoard(), 'bottom', true);
            renderShips(null, 'top', true);

            const myShips = document.querySelector('.player-ships-area');
            const enemyShips = document.querySelector('.enemy-ships-area');
            enemyShips.classList.remove('hide');
            myShips.classList.remove('hide');
        };

        const resetShipPlacement = () => {
            const bottomDivs = document.querySelectorAll('.battleship-grid.bottom div');
            bottomDivs.forEach((div) => {
                if (div.classList.contains(shipToPlace.toLowerCase())) {
                    div.classList.remove(shipToPlace.toLowerCase());
                }
            });
        };

        const placeShipOnClick = (evt) => {
            // shipToPlace;
            // shipOrientation;
            const shipName = shipToPlace.toLowerCase();
            const coords = JSON.parse(evt.target.dataset.gridCoord);
            console.log(`name: ${shipName}, coord: ${coords}, orientation: ${shipOrientation}`);
            console.log(app.playerOne.ships);

            if (app.playerOne.ships[shipName].placed === true) {
                console.log(`${shipName} already placed!`);
                return;
            }

            app.playerOne.placeShip(shipName, coords, shipOrientation);
            renderShips(app.playerOne.board.bottom.getBoard(), 'bottom');
        };

        const showShipOutlineOnHover = (evt) => {
            const shipClass = shipToPlace.toLowerCase();
            const cursorPosition = JSON.parse(evt.target.dataset.gridCoord);
            const bottomDivs = document.querySelectorAll('.battleship-grid.bottom div');

            const i = cursorPosition[0];
            const j = cursorPosition[1];
            // calculates the flat array index given the associated [y, x] array coordinates
            const basisGridIndex = i * 10 + j;

            resetShipPlacement();

            // length depends on type of ship
            const shipLength = SHIP_LENGTH[shipClass];

            if (shipOrientation === 'h') {
                for (let k = basisGridIndex; k < basisGridIndex + shipLength; k++) {
                    // only show hover if whole ship can fit horizontally
                    if (k / roundToNearest10(basisGridIndex) < 1) {
                        const div = bottomDivs[k];
                        div.classList.add(shipClass);
                    }
                }
            }
            else if (shipOrientation === 'v') {
                for (let k = basisGridIndex; k < basisGridIndex + shipLength * 10; k += 10) {
                    // check if ship body is within bounds of grid
                    if (k < 100) {
                        const div = bottomDivs[k];
                        div.classList.add(shipClass);
                    }
                }
            }
        };

        // *** requires refactoring ***
        const setupShipPlacement = () => {
            const myShips = document.querySelector('.player-ships-area');
            const ships = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer'];
            ships.forEach((ship) => {
                const shipBtn = document.createElement('button');
                shipBtn.textContent = ship;
                myShips.appendChild(shipBtn);
            });

            const shipButtons = document.querySelectorAll('.player-ships-area button');

            // Clicking on ship button sets the currently selected ship to that ship
            [...shipButtons].forEach((btn) => {
                if (btn.textContent === 'Change Orientation') {
                    btn.addEventListener('click', () => {
                        if (shipToPlace) {
                            resetShipPlacement();
                        }
                        if (shipOrientation === 'h') {
                            shipOrientation = 'v';
                            console.log(`Ship orientation: ${shipOrientation}`);
                        }
                        else {
                            shipOrientation = 'h';
                            console.log(`Ship orientation: ${shipOrientation}`);
                        }
                    });
                    return;
                }

                btn.addEventListener('click', () => {
                    if (shipToPlace) {
                        resetShipPlacement();
                    }

                    shipToPlace = btn.textContent;
                    console.log(`Currently selected ship: ${shipToPlace}`);
                });
            });

            // Each grid cell is assigned a listener that supports ship placement on hover
            const bottomDivs = document.querySelectorAll('.battleship-grid.bottom div');

            [...bottomDivs].forEach((div) => {
                div.addEventListener('mouseover', showShipOutlineOnHover);
                div.addEventListener('click', placeShipOnClick);
            });
        };

        newGameBtn.addEventListener('click', prepareNewGame);
        setupShipPlacement();
    }

    return {
        createGrid,
        renderShips,
        addGridListeners,
        addEventListeners,
    };
}
