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
    // board.renderBoard();

    expect(board.getBoard()[1][1]).toBeInstanceOf(Object);
    expect(board.getBoard()[4][1]).toBeInstanceOf(Object);
});


// check for space should be done independently of adding ship objects, otherwise
// those additions need to be undone
// todo: write an object to do the check first before placing the ships
test('throw when ship placed without enough space', () => {
    const board = GameBoard();
    const shipH = Ship('carrier');
    const shipV = Ship('carrier');
    
    // test both horizontal and vertical ship placement
    expect(() => board.placeShip(shipH, [9, 7], 'h')).toThrow();
    expect(() => board.placeShip(shipV, [7, 1], 'v')).toThrow();

    // board.renderBoard();

    // check that ships are not partially placed when not enough space
    let boardRowH = board.getBoard()[9];
    let boardRowV = board.getBoard()[9];

    boardRowH = boardRowH.map( (space) => space.getName ? space.getName() : space );
    boardRowV = boardRowV.map( (space) => space.getName ? space.getName() : space );
    
    expect(boardRowH).not.toContain('carrier');
    expect(boardRowV).not.toContain('destroyer');
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
    
    board.receiveAttack([9, 0]);
    // check that same Ship object is receiving hits
    board.receiveAttack([9, 1]);

    expect(board.getBoard()[9][0]).toBeInstanceOf(Object);
    expect(ship.getTimesHit()).toBe(2);
});

test('attacking same tile twice does not damage ship twice', () => {
    const board = GameBoard();
    const ship = Ship('carrier');
    
    board.placeShip(ship, [9, 0], 'h');
    
    board.receiveAttack([9, 0]);
    board.receiveAttack([9, 0]);

    expect(board.getBoard()[9][0]).toBeInstanceOf(Object);
    expect(ship.getTimesHit()).toBe(1);
});

test('attack misses', () => {
    const board = GameBoard();
    const ship = Ship('carrier');
    
    board.placeShip(ship, [9, 0], 'h');
    
    const expected = {status: 'Missed', coords: [8,0]};
    expect(board.receiveAttack([8, 0])).toMatchObject(expected);
});

test('report when all ships sunk', () => {
    const board = GameBoard();
    
    // full fleet to be placed
    const carrier = Ship('carrier');
    const battleship = Ship('battleship');

    // place and sink carrier
    board.placeShip(carrier, [0, 0], 'v');
    board.receiveAttack([0, 0]);
    board.receiveAttack([1, 0]);
    board.receiveAttack([2, 0]);
    board.receiveAttack([3, 0]);
    board.receiveAttack([4, 0]);
    // place and sink battleship
    board.placeShip(battleship, [0, 1], 'v');
    board.receiveAttack([0, 1]);
    board.receiveAttack([1, 1]);
    board.receiveAttack([2, 1]);
    board.receiveAttack([3, 1]);

    expect(carrier.isSunk()).toBe(true);
    expect(battleship.isSunk()).toBe(true);
    // check that sunk ships are added to list
    expect(board.getShipsSunk()).toContain('carrier');
    expect(board.getShipsSunk()).toContain('battleship');
    
    board.renderBoard();
});