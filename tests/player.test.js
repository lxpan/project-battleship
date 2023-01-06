import Player from '../Player';

// required as JavaScript object comparisons don't compare inner values
function compareArray(arrA, arrB) {
    if ((arrA[0] === arrB[0]) & (arrA[1] === arrB[1])) {
        return true;
    }
    return false;
}

function ArrayOfArraysIncludesArray(arrA, arrays) {
    return JSON.stringify(arrays).includes(JSON.stringify(arrA));
}

function processAttackResult(_result, _move, currentPlayer) {
    try {
        if (_result.status === 'Hit') {
            // currentPlayer.board.top.getBoard()[_move[0]][_move[1]] = 'H';
            currentPlayer.board.top.setTile(_move, 'H');
            currentPlayer.addHit(_move);
        } else if (_result.status === 'Missed') {
            currentPlayer.board.top.setTile(_move, 'x');
            currentPlayer.addMiss(_move);
        } else if (_result.status === 'Error') {
            console.log(`Attack error: ${_result}`);
        }
    } catch {
        console.log(`Catch: result ${_result}, move: ${_move}`);
    }
}

describe('main game loop', () => {
    test('players take turns attacking', () => {
        const player = Player('Player');
        const computer = Player('Computer');

        computer.setupBottomBoard();

        let currentPlayer = player;

        const attackCoords = [
            [4, 0],
            [6, 1],
            [4, 1],
            [4, 1],
            [3, 0],
        ];

        attackCoords.forEach((move) => {
            if (currentPlayer.name === 'Player') {
                const result = computer.board.bottom.receiveAttack(move);
                processAttackResult(result, move, currentPlayer);
                currentPlayer = computer;
            } else {
                const result = player.board.bottom.receiveAttack(move);
                processAttackResult(result, move, currentPlayer);
                currentPlayer = player;
            }
        });
    });

    test('Computer attacks adjacent to previous hits', () => {
        const player = Player('Player');
        player.setupBottomBoard();

        const computer = Player('Computer');
        const moveGen = computer.playNextMovePreset();

        const move = moveGen.next().value;
        const result = player.board.bottom.receiveAttack(move);
        processAttackResult(result, move, computer);

        const move2 = moveGen.next().value;
        const result2 = player.board.bottom.receiveAttack(move2);
        processAttackResult(result2, move2, computer);

        // Computer should attack adjacent to previous hit at (0, 0) and avoid repeated misses
        expect(
            ArrayOfArraysIncludesArray(computer.playNextMove(), [
                [1, 4],
                [0, 3],
            ])
        ).toBe(true);
        const move3 = computer.playNextMove();
        const result3 = player.board.bottom.receiveAttack(move3);
        processAttackResult(result3, move3, computer);
    });

    test('Computer attacks random spot when no previous hits', () => {
        const computer = Player('Computer');
        const player = Player('Player');
        player.setupBottomBoard();

        let turnGameWon = false;

        for (let i = 0; i < 70; i++) {
            const move = computer.playNextMove();
            const result = player.board.bottom.receiveAttack(move);
            processAttackResult(result, move, computer);

            if (!turnGameWon && player.board.bottom.haveAllShipsSunk()) {
                turnGameWon = i;
                console.log(`All ships have been sunk at turn: ${turnGameWon}`);
                // break
            }

            // const enemyShipsSunk = player.board.bottom.getShipsSunk();
            // if(enemyShipsSunk.length > 0) console.log(enemyShipsSunk);
        }
        player.renderPlayerBoards();
        computer.renderPlayerBoards();
        console.log(
            `Total misses: ${computer.getMisses().size}\nTotal hits: ${
                computer.getHits().size
            }\nTotal shots: ${
                computer.getMisses().size + computer.getHits().size
            }\nTotal of random attempts: ${computer.getRoulette().length}`
        );
    });
});
