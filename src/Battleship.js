import Player from './Player';
import GameBoard from './Gameboard';
import Ship from './Ship';
import View from './View';

export default function Battleship(playerName, isComputer, gridX, gridY) {
    const playerOne = Player(playerName);
    const playerTwo = isComputer ? Player('Computer') : Player('Player Two');
    let currentPlayer = playerOne;

    function setupGame() {
        playerOne.setupBottomBoardSpreadOut();
        playerTwo.setupBottomBoard();
    }

    const status = () => ({
        playerOne: playerOne.name,
        playerTwo: playerTwo.name,
        currentPlayer: currentPlayer.name,
    });

    const printBoards = () => {
        playerOne.renderPlayerBoards();
        playerTwo.renderPlayerBoards();
    };

    function processAttackResult(_result, _move, thePlayer) {
        try {
            if (_result.status === 'Hit') {
                // currentPlayer.board.top.getBoard()[_move[0]][_move[1]] = 'H';
                thePlayer.board.top.setTile(_move, 'H');
                thePlayer.addHit(_move);
            }
            else if (_result.status === 'Missed') {
                thePlayer.board.top.setTile(_move, 'x');
                thePlayer.addMiss(_move);
            }
            else if (_result.status === 'Error') {
                console.log(`Attack error: ${_result}`);
            }
        }
        catch {
            console.log(`Catch: result ${_result}, move: ${_move}`);
        }
    }

    const playTurn = (move) => {
        if (currentPlayer.name === 'Player') {
            const result = playerTwo.board.bottom.receiveAttack(move);
            processAttackResult(result, move, playerOne);
            currentPlayer = playerTwo;
        }
        else if (currentPlayer.name === 'Computer') {
            const result = playerOne.board.bottom.receiveAttack(move);
            processAttackResult(result, move, playerTwo);
            currentPlayer = playerOne;
        }
    };

    const playComputerMove = () => playerTwo.playNextMove();

    const gameStats = () => ({
        playerOne: playerOne.stats(),
        playerTwo: playerTwo.stats(),
    });

    const instance = {
        status,
        currentPlayer,
        setupGame,
        printBoards,
        playTurn,
        playComputerMove,
        gameStats,
    };

    return instance;
}
