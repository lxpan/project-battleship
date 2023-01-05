import Player from '../Player';


function processAttackResult(_result, _move, currentPlayer) {
    if(_result.status === 'Hit') {
        currentPlayer.board.top.getBoard()[_move[0]][_move[1]] = 'H';
        currentPlayer.addHit(_move);
    } else if(_result.status === 'Missed') {
        currentPlayer.board.top.getBoard()[_move[0]][_move[1]] = 'x';
        currentPlayer.addMiss(_move);
    }
}


describe('main game loop', () => {
    test('players take turns attacking', () => {
        const player = Player('Player');
        const computer = Player('Computer');

        computer.setupBottomBoard();

        let currentPlayer = player;

        const attackCoords = [[4, 0], [6, 1], [4, 1], [4, 1], [3, 0]];

        attackCoords.forEach((move) => {
            if(currentPlayer.name === 'Player') {
                const result = computer.board.bottom.receiveAttack(move);
                processAttackResult(result, move, currentPlayer);
                currentPlayer = computer;
            } else {
                const result = player.board.bottom.receiveAttack(move);
                processAttackResult(result, move, currentPlayer);
                currentPlayer = player;
            }
        });

        // misses made by player
        // console.log(computer.board.bottom.getMisses());
        // misses made by computer
        // console.log(player.board.bottom.getMisses());

        // player.renderPlayerBoards();
        // computer.renderPlayerBoards();
    });

    test('Computer makes simple attacks', () => {
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
        
        player.renderPlayerBoards();
        computer.renderPlayerBoards();
        
        // Computer should attack adjacent to previous hit at (0, 0) and avoid repeated misses
        expect([[1, 0], [0, 1]]).toContain(computer.playNextMove())
    });

});
