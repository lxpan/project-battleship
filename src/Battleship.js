import Player from './Player';
import GameBoard from './Gameboard';
import Ship from './Ship';
import View from './View';

export default function Battleship(playerName, isComputer, gridX, gridY) {
    const playerOne = Player(playerName);
    const playerTwo = isComputer ? Player('Computer') : Player('Player Two');
    let currentPlayer = playerOne;

    function setupGame() {
        // playerOne.setupBottomBoardSpreadOut();
        // playerTwo.setupBottomBoard();
        playerTwo.setupBottomBoardRandom();
        playerTwo.renderPlayerBoards();
    }

    function resetGame() {
        playerOne.resetBoard();
        playerOne.resetShips();

        playerTwo.resetBoard();
        playerTwo.resetShips();

        setupGame();

        printBoards();
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

    const playTurn = (move, cpuMove) => {
        const resultPlayer = playerTwo.board.bottom.receiveAttack(move);
        processAttackResult(resultPlayer, move, playerOne);
        currentPlayer = playerTwo;

        const computersMove = cpuMove;
        const resultComputer = playerOne.board.bottom.receiveAttack(computersMove);
        processAttackResult(resultComputer, computersMove, playerTwo);
        currentPlayer = playerOne;
    };

    const playComputerMove = () => playerTwo.playNextMove();

    const gameStats = () => ({
        playerOne: playerOne.stats(),
        playerTwo: playerTwo.stats(),
    });

    const victoryStatus = () => {
        // player wins when AI has lost all ships
        if (playerTwo.board.bottom.haveAllShipsSunk()) {
            return 1;
        }
        // player loses when they have lost all ships
        if (playerOne.board.bottom.haveAllShipsSunk()) {
            return -1;
        }
        // otherwise game is still in progress
        return 0;
    };

    const instance = {
        status,
        currentPlayer,
        setupGame,
        resetGame,
        printBoards,
        playTurn,
        playComputerMove,
        gameStats,
        playerOne,
        playerTwo,
        victoryStatus,
    };

    return instance;
}
