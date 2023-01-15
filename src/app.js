import './style.css';
import View from './View';
import Battleship from './Battleship';

console.log('Loading app.js');

const app = Battleship('Player', true, 10, 10);
app.setupGame();

const view = View();

view.createGrid(10, 10);

const playerTopGrid = app.playerOne.board.top.getBoard();
const playerBottomGrid = app.playerOne.board.bottom.getBoard();

view.renderShips(playerBottomGrid, 'bottom');
view.renderShips(playerTopGrid, 'top');
view.addEventListeners(app, playerTopGrid, playerBottomGrid);
