import Player from '../Player';


describe('main game loop', () => {
    test('players take turns attacking', () => {
        const player = Player('Player');
        const computer = Player('Computer');

        computer.setupBottomBoard();

        let currentPlayer = player;

        const attackCoords = [[4, 0], [6, 1], [7, 2]];

        attackCoords.forEach((move) => {
            if(currentPlayer.name === 'Player') {
                const result = computer.board.bottom.receiveAttack(move);
                if(result.status === 'Hit') {
                    player.board.top.getBoard()[move[0]][move[1]] = 'H';
                } else if(result.status === 'Missed') {
                    player.board.top.getBoard()[move[0]][move[1]] = 'x';
                }
                currentPlayer = computer;
            } else {
                const result = player.board.bottom.receiveAttack(move);
                if(result.status === 'Hit') {
                    computer.board.top.getBoard()[move[0]][move[1]] = 'H';
                } else if(result.status === 'Missed') {
                    computer.board.top.getBoard()[move[0]][move[1]] = 'x';
                }
                currentPlayer = player;
            }

        })

        player.renderPlayerBoards();
        computer.renderPlayerBoards();
    });

});
