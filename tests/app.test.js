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
    const playerMoves = [[0, 4], [6, 4], [1, 4], app.playComputerMove];

    while (!gameOver) {
      // player plays a move, then the computer
      playerMoves.forEach((move) => {
        // use lazy evaluation of move function to provide it up to date board state
        if (typeof move === 'function') {
          app.playTurn(move());
        } else {
          app.playTurn(move);
        }

        app.printBoards();
      });
      gameOver = true;
    }

    console.log(app.gameStats());
    expect(app.gameStats().playerOne.totalHits).toBe(2);
    expect(app.gameStats().playerTwo.totalHits).toBe(2);
  });
});
