/* View.js is our DOM module */

export default (function View() {
    function test() {
        console.log('Loading View');
    }

    function createGrid(gridY, gridX) {
        const battleshipGridTop = document.querySelector('.battleship-grid.top');
        const battleshipGridBottom = document.querySelector('.battleship-grid.bottom');

        for (let i = 0; i < gridY * gridX; i++) {
            const gridDiv = document.createElement('div');
            battleshipGridTop.appendChild(gridDiv);
        }

        for (let i = 0; i < gridY * gridX; i++) {
            const gridDiv = document.createElement('div');
            battleshipGridBottom.appendChild(gridDiv);
        }
    }

    function renderShips(boardArr, whichGrid) {
        const bottomGrids = Array.from(
            document.querySelectorAll(`.battleship-grid.${whichGrid} div`),
        );
        console.log(bottomGrids);

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const grid = boardArr[i][j];

                if (grid.getName) {
                    const div = bottomGrids[i * 10 + j];
                    div.classList.add('ship');
                }
            }
        }
    }

    return {
        createGrid,
        test,
        renderShips,
    };
}());
