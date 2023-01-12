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

    return {
        createGrid,
        test,
    };
}());
