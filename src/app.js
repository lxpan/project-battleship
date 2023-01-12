import './style.css';
import View from './View';

console.log('Loading app.js');

View.test();
const boardDiv = document.getElementById('boardDiv');
const thing = View.drawBoard(10, 10);
boardDiv.appendChild(thing);
