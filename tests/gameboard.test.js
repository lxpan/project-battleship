import GameBoard from '../Gameboard';
import Ship from '../Ship';

test('place ship horizontally', () => {
    const board = GameBoard();
    const ship = Ship('carrier');
    
    board.placeShip(ship, [9, 0], 'h');

    // board.renderBoard();
    expect(board.getBoard()[9][0]).toBeInstanceOf(Object);
    expect(board.getBoard()[9][4]).toBeInstanceOf(Object);
});

test('place ship vertically', () => {
    const board = GameBoard();
    const ship = Ship('carrier');
    
    board.placeShip(ship, [1, 1], 'v');

    expect(board.getBoard()[1][1]).toBeInstanceOf(Object);
    expect(board.getBoard()[4][1]).toBeInstanceOf(Object);
});

test('throw when tile occupied', () => {
    const board = GameBoard();
    const ship = Ship('carrier');
    
    board.placeShip(ship, [9, 0], 'h');
    expect(() => board.placeShip(ship, [9, 0], 'h')).toThrow();
});

test('attack position on board', () => {
    const board = GameBoard();
    const ship = Ship('carrier');
    
    board.placeShip(ship, [9, 0], 'h');
    board.renderBoard();
    
    board.receiveAttack([9, 0]);
    // check that same Ship object is receiving hits
    board.receiveAttack([9, 1]);

    expect(board.getBoard()[9][0]).toBeInstanceOf(Object);
    expect(ship.getHitPoints()).toBe(2);
});

test('attack misses', () => {
    const board = GameBoard();
    const ship = Ship('carrier');
    
    board.placeShip(ship, [9, 0], 'h');
    
    const expected = {status: 'Missed', coords: [8,0]};
    expect(board.receiveAttack([8, 0])).toMatchObject(expected);
});
