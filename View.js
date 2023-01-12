/* View.js is our DOM module */

export default (function View() {
    function test() {
        console.log('foobar');
    }

    function drawBoard(gridX, gridY) {
        const table = document.createElement('table');

        [...Array(gridX)].forEach((_, i) => {
            const tableRow = document.createElement('tr');
            [...Array(gridX)].forEach((_, j) => {
                const data = document.createElement('td');
                data.innerHTML = j;
                tableRow.appendChild(data);
            });
            table.appendChild(tableRow);
        });

        return table;
    }

    return {
        drawBoard,
    };
}());
