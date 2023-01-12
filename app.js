// import View from './View';

// const boardDiv = document.getElementById('boardDiv');
// const battleshipBoard = View.drawBoard(10, 10);
// boardDiv.appendChild(battleshipBoard);

import * as http from 'http';
import * as fs from 'fs';

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', (error, data) => {
        if (error) {
            res.writeHead(404); // 404 means not found
            res.write('Error: File Not Found');
        }
        else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong, error');
    }
    else {
        console.log(`Server is listening on port ${port}`);
    }
});
