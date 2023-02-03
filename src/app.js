import View from './View';
import Battleship from './Battleship';

import './style.css';
import splashImg from './images/battleship.svg';

const body = document.querySelector('body');
const mySplashImg = new Image();
mySplashImg.src = splashImg;
mySplashImg.className = 'splash-battleship-img';
body.appendChild(mySplashImg);

console.log('Loading app.js');

const app = Battleship('Player', true, 10, 10);
const view = View();

app.setupGame();
const playerTopGrid = app.playerOne.board.top.getBoard();
const playerBottomGrid = app.playerOne.board.bottom.getBoard();

view.createGrid(10, 10);
view.renderShips(playerBottomGrid, 'bottom');
view.renderShips(playerTopGrid, 'top');
view.addEventListeners(app);
view.addGridListeners(
    app,
    app.playerOne.board.top.getBoard(),
    app.playerOne.board.bottom.getBoard(),
);
view.addShipStatusIconLegend();
view.addImageAttributionLink();
