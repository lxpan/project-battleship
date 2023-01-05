import GameBoard from './Gameboard';
import Ship from './Ship';

export default function Player(name) {
    // BOTTOM grid: players' own ships
    // TOP grid: players' targetting grid for recording attacks on the enemy

    const hits = new Set();
    const misses = new Set();

    const board = {
        top: GameBoard(),
        bottom: GameBoard(),
    };

    const setupBottomBoard = () => {
        // full fleet to be placed
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
        const bottomBoardTitle = (name.toUpperCase() + ' SHIPS').padStart(
            28,
            ' '
        );
        const combinedRender = `${topBoardTitle}${board.top.renderBoard()}\n${bottomBoardTitle}${board.bottom.renderBoard()}`;
        console.log(combinedRender);
    };

    const playNextMovePreset = function* () {
        yield [0, 0];
        yield [2, 4];
    };

    const addHit = (coord) => {
        hits.add(JSON.stringify(coord));
    }

    const addMiss = (coord) => {
        misses.add(JSON.stringify(coord));
    }

    const instance = {
        name,
        board,
        setupBottomBoard,
        renderPlayerBoards,
        playNextMove,
        playNextMovePreset,
        addHit,
        addMiss
    };

    return instance;
}
