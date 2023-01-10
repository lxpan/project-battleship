import Battleship from '../app';

describe('main game loop', () => {
    test('Set up the game for both players', () => {
        const app = Battleship('Player1', true, 10, 10);

        expect(app.status).toBeTruthy();
    });

    /* Player plays turns against the AI by entering in move coordinates */
    test('Main game loop', () => {
        // set up new game - create players and gameboards
        const app = Battleship('Player', true, 10, 10);
        // populate gameboard with predetermined coords (for ships)
        app.setupGame();

        // game loop
        let gameOver = false;
        const playerMoves = [[0, 4], [6, 4], [1, 4], app.playComputerMove()];

        while (!gameOver) {
            playerMoves.forEach((move) => {
                // player plays a move, then the computer
                console.log(app.status());
                app.playTurn(move);
                app.printBoards();
            });
            gameOver = true;
        }

        console.log(app.gameStats());
        expect(app.gameStats().playerOne.totalHits).toBe(2);
    });
});
