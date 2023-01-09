import Player from '../Player';

function ArrayOfArraysIncludesArray(arrA, arrays) {
    return JSON.stringify(arrays).includes(JSON.stringify(arrA));
}

function processAttackResult(_result, _move, currentPlayer) {
    try {
        if (_result.status === 'Hit') {
            // currentPlayer.board.top.getBoard()[_move[0]][_move[1]] = 'H';
            currentPlayer.board.top.setTile(_move, 'H');
            currentPlayer.addHit(_move);
        }
        else if (_result.status === 'Missed') {
            currentPlayer.board.top.setTile(_move, 'x');
            currentPlayer.addMiss(_move);
        }
        else if (_result.status === 'Error') {
            console.log(`Attack error: ${_result}`);
        }
    }
    catch {
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
            }
            else {
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
            ]),
        ).toBe(true);
        const move3 = computer.playNextMove();
        const result3 = player.board.bottom.receiveAttack(move3);
        processAttackResult(result3, move3, computer);
    });

    test('Computer attacks random spot when no previous hits', () => {
        const computer = Player('Computer');
        const player = Player('Player');
        player.setupBottomBoardSpreadOut();

        const numRounds = 100;
        let turnGameWon = false;

        [...Array(numRounds)].forEach((_, i) => {
            const move = computer.playNextMove();
            const result = player.board.bottom.receiveAttack(move);
            processAttackResult(result, move, computer);

            if (!turnGameWon && player.board.bottom.haveAllShipsSunk()) {
                turnGameWon = i;
                // break
            }
        });

        player.renderPlayerBoards();
        computer.renderPlayerBoards();

        const totalMisses = computer.getMisses().size;
        const totalHits = computer.getHits().size;
        const totalAttacks = totalMisses + totalHits;
        const totalRandomAttempts = computer.getRoulette().length;

        if (turnGameWon) console.log(`All ships have been sunk at turn: ${turnGameWon}`);
        console.log(
            `Total misses: ${totalMisses}\nTotal hits: ${totalHits}\nTotal shots: ${
                totalMisses + totalHits
            }\nTotal of random attempts: ${totalRandomAttempts}`,
        );

        // validate that AI attacks every round
        expect(totalAttacks).toBe(numRounds);
    });
});
