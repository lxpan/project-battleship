import './style.css';
import View from './View';
import Battleship from './Battleship';

console.log('Loading app.js');

const app = Battleship('Player', true, 10, 10);
app.setupGame();
// app.printBoards();

View.test();
View.createGrid(10, 10);

const playerBottomGrid = app.playerOne.board.bottom.getBoard();
const computerBottomGrid = app.playerTwo.board.bottom.getBoard();

View.renderShips(playerBottomGrid, 'bottom');
// View.renderShips(computerBottomGrid, 'top');
