/**
 * @jest-environment jsdom
 */
import View from '../src/View';

test('drawBoard able to create 10x10 table', () => {
    document.body.innerHTML = `
      <div id="boardDiv"></div>
    `;

    const tableDiv = document.getElementById('boardDiv');
    const table = View.drawBoard(10, 10);

    tableDiv.appendChild(table);
    const rows = tableDiv.querySelectorAll('tr');

    // const rows = document.querySelectorAll('tr');
    console.log(tableDiv.innerHTML);
});
