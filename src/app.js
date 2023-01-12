import './style.css';
import View from './View';
import Battleship from './Battleship';

console.log('Loading app.js');

const app = Battleship('Player', true, 10, 10);
app.setupGame();
// app.printBoards();

View.createGrid(10, 10);

const playerBottomGrid = app.playerOne.board.bottom.getBoard();
const playerTopGrid = app.playerOne.board.top.getBoard();

View.renderShips(playerBottomGrid, 'bottom');
View.renderShips(playerTopGrid, 'top');
