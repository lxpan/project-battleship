import View from './View';

const boardDiv = document.getElementById('boardDiv');
const battleshipBoard = View.drawBoard(10, 10);
boardDiv.appendChild(battleshipBoard);
