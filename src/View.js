import torpedoIcon from './images/torpedo-icon.png';
import crosshairIcon from './images/crosshair-icon.png';

const SHIP_STATUS_LEGEND = {
    hit: {
        imgSrc: crosshairIcon,
        legendText: 'Ship has been hit',
    },
    sunk: {
        imgSrc: torpedoIcon,
        legendText: 'Ship has been sunk',
    },
};

/* View.js is our DOM module */
export default function View() {
    // initial phase of the game is ship placement
    let gamePhase = 'ship_placement';
    let gameReadyToStart = false;
    let firstTurnPlayed = false;
    let shipToPlace = null;
    let shipOrientation = 'h';
    const MISSION_LOG_SIZE = 6;
    const logQueue = [];

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

    function sendErrorToMissionLog(errorStr) {
        const playerMissionLogList = document.querySelector('.player-mission-log--list');
        const newEntry = document.createElement('li');
        newEntry.textContent = errorStr;
        playerMissionLogList.appendChild(newEntry);
    }

    function titleCase(string) {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

    function updateEnemyShipsList(shipsObj, update) {
        const myShips = document.querySelector('.enemy-ships-list');
        if (update) {
            myShips.innerHTML = '';
        }

        const ships = Object.values(shipsObj);
        // iterate through player two ship objects
        ships.forEach((ship) => {
            const shipDiv = document.createElement('div');
            const shipBtn = document.createElement('button');

            shipDiv.className = 'enemy-ship-container';
            shipBtn.textContent = titleCase(ship.getName());

            const torpedoImg = new Image();
            const crosshairImg = new Image();
            torpedoImg.src = torpedoIcon;
            crosshairImg.src = crosshairIcon;

            torpedoImg.classList.add('hide');
            crosshairImg.classList.add('hide');
            // display crosshair icon if enemy ship has been hit
            if (ship.getTimesHit() > 0) {
                crosshairImg.classList.remove('hide');
            }

            // display torpedo icon if enemy ship has been sunk
            if (ship.isSunk() === true) {
                torpedoImg.classList.remove('hide');
            }

            shipDiv.append(shipBtn);
            shipDiv.appendChild(crosshairImg);
            shipDiv.appendChild(torpedoImg);
            myShips.appendChild(shipDiv);
        });
    }

    function addGridListeners(callback, topBoard, bottomBoard) {
        const topGridDivElements = Array.from(
            document.querySelectorAll(`.battleship-grid.top div`),
        );
        const bottomGridDivElements = Array.from(
            document.querySelectorAll(`.battleship-grid.bottom div`),
        );

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
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const boardGrid = bottomBoard[i][j];

                    // get the div that corresponds to the position in the array
                    const div = bottomGridDivElements[i * 10 + j];
                    // assign coords to data attribute (used later for attacks)
                    // div.dataset.gridCoord = JSON.stringify([i, j]);

                    if (boardGrid.getName && boardGrid.positionsHit.has(JSON.stringify([i, j]))) {
                        div.classList.add('hit');
                    }
                }
            }
        }

        const addGameLoopClickListener = (_grid) => {
            // the main "game loop"
            _grid.addEventListener('click', () => {
                if (!gameReadyToStart) {
                    sendErrorToMissionLog('All ships must be placed before game can start.');
                    return;
                }

                if (_grid.classList.contains('hit') || _grid.classList.contains('miss')) {
                    return;
                }

                callback.playTurn(JSON.parse(_grid.dataset.gridCoord), callback.playComputerMove());
                callback.printBoards();
                // update the targetting (top) grid after attack is played
                renderTargettingGrid();
                // update player's view (bottom grid) - AI moves straight after
                updateBottomGrid();
                updateEnemyShipsList(callback.playerTwo.ships, true);

                const playTurnCallToAction = document.getElementById('play-turn-cta');
                if (!firstTurnPlayed) {
                    firstTurnPlayed = true;
                    playTurnCallToAction.classList.add('hide-arrow');
                }
            });
        };

        const addVictoryAlertListener = (_grid) => {
            // checks if player has won or lost
            _grid.addEventListener('click', () => {
                switch (callback.victoryStatus()) {
                    case 1: {
                        alert('You have won!');
                        break;
                    }
                    case -1: {
                        alert('You have lost!');
                        break;
                    }
                    case 0: {
                        break;
                    }
                    default: {
                        break;
                    }
                }
            });
        };

        topGridDivElements.forEach((grid) => {
            addGameLoopClickListener(grid);
            addVictoryAlertListener(grid);
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
        const startGameBtn = document.getElementById('start-game-btn');
        const resetGameBtn = document.getElementById('reset-game-btn');
        const placeShipBtn = document.getElementById('place-ships-btn');

        const deregisterGridListeners = () => {
            const divGrids = Array.from(document.querySelectorAll(`.battleship-grid.top div`));
            divGrids.forEach((grid) => {
                // get rid of all existing listeners by replacing div with own deep clone
                grid.replaceWith(grid.cloneNode(true));
            });
        };

        const startGame = (reset) => {
            app.printBoards();

            // if(!gameReadyToStart)

            if (reset) {
                // resets board and ships for both players
                app.resetGame();
                // re-initialises DOM view of top and bottom board
                renderShips(null, 'top', true);
                renderShips(null, 'bottom', true);
                // remove event listeners from grid
                deregisterGridListeners();
                // re-add the event listeners for player
                addGridListeners(
                    app,
                    app.playerOne.board.top.getBoard(),
                    app.playerOne.board.bottom.getBoard(),
                );
                // place AI's ships
                app.setupGame();
            }
        };

        const resetShipPlacement = () => {
            const bottomDivs = document.querySelectorAll('.battleship-grid.bottom div');
            bottomDivs.forEach((div) => {
                if (shipToPlace && div.classList.contains(shipToPlace.toLowerCase())) {
                    div.classList.remove(shipToPlace.toLowerCase());
                }
            });
        };

        const placeShipOnClick = (evt) => {
            if (shipToPlace === null) {
                sendErrorToMissionLog('Cannot place ship when no ship has been selected!');
                return;
            }

            const shipName = shipToPlace.toLowerCase();
            const coords = JSON.parse(evt.target.dataset.gridCoord);
            // console.log(`name: ${shipName}, coord: ${coords}, orientation: ${shipOrientation}`);
            // console.log(app.playerOne.ships);

            // do not place the ship if already placed
            if (app.playerOne.ships[shipName].placed === true) {
                console.log(`${shipName} already placed!`);
                return;
            }
            // if current tile is occupied, display error in view

            try {
                // place selected ship on board
                app.playerOne.placeShip(shipName, coords, shipOrientation);
                // update bottom grid to show newly placed ship
                renderShips(app.playerOne.board.bottom.getBoard(), 'bottom');

                // game is ready to start after all ships placed
                if (app.playerOne.allShipsPlaced()) {
                    gameReadyToStart = true;
                    // transition phase to game_time once all ships placed
                    gamePhase = 'game_time';
                    const placeShipCallToAction = document.getElementById('place-ships-cta');
                    const playTurnCallToAction = document.getElementById('play-turn-cta');
                    placeShipCallToAction.classList.add('hide');
                    playTurnCallToAction.classList.remove('hide-arrow');
                }
            }
            catch (err) {
                const playerMissionLogList = document.querySelector('.player-mission-log--list');
                const newEntry = document.createElement('li');
                newEntry.textContent = `Cannot place ${shipName}: tile is occupied!`;

                if (logQueue.length >= MISSION_LOG_SIZE) {
                    // remove first element
                    logQueue.shift();
                    // add new entry to end of queue
                    logQueue.push(newEntry);
                    // replace all mission log children with queued nodes
                    playerMissionLogList.replaceChildren(...logQueue);
                }
                else {
                    logQueue.push(newEntry);
                    playerMissionLogList.appendChild(newEntry);
                }
            }
        };

        const showShipOutlineOnHover = (evt) => {
            // do not generate outline if all ships have been placed
            if (app.playerOne.allShipsPlaced()) {
                return;
            }

            let shipClass;

            if (shipToPlace) {
                shipClass = shipToPlace.toLowerCase();
            }

            const cursorPosition = JSON.parse(evt.target.dataset.gridCoord);
            const bottomDivs = document.querySelectorAll('.battleship-grid.bottom div');

            const i = cursorPosition[0];
            const j = cursorPosition[1];
            // calculates the flat array index given the associated [y, x] array coordinates
            const basisGridIndex = i * 10 + j;

            resetShipPlacement();

            // length depends on type of ship
            const shipLength = SHIP_LENGTH[shipClass];

            // generate horizontal ship outline
            if (shipOrientation === 'h') {
                for (let k = basisGridIndex; k < basisGridIndex + shipLength; k++) {
                    // only show hover if whole ship can fit horizontally
                    if (k / roundToNearest10(basisGridIndex) < 1) {
                        const div = bottomDivs[k];
                        div.classList.add(shipClass);
                    }
                }
            }
            // generate vertical ship outline
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

            // for each bottom grid tile, add listeners for ship placement
            [...bottomDivs].forEach((div) => {
                div.addEventListener('mouseover', showShipOutlineOnHover);
                div.addEventListener('click', placeShipOnClick);
            });
        };

        // console.log(startGameBtn);

        startGameBtn.addEventListener('click', () => {
            startGame(false);
        });
        resetGameBtn.addEventListener('click', () => {
            startGame(true);
        });

        setupShipPlacement();
        updateEnemyShipsList(app.playerTwo.ships);
    }

    function addShipStatusIconLegend() {
        const legendContainer = document.querySelector('.legend-container');
        const legendItem = document.createElement('div');

        Object.values(SHIP_STATUS_LEGEND).forEach((status) => {
            const legendText = document.createElement('div');

            legendText.textContent = status.legendText;
            legendItem.classList.add('legend-item');

            const img = new Image();
            img.src = status.imgSrc;
            img.classList.add('legend-icon');

            legendItem.append(img, legendText);
        });
        legendContainer.appendChild(legendItem);
    }

    return {
        createGrid,
        renderShips,
        addGridListeners,
        addEventListeners,
        addShipStatusIconLegend,
    };
}
