import GameBoard from '../src/Gameboard';
import Ship from '../src/Ship';

test('place ship horizontally', () => {
    const board = GameBoard();
    const ship = Ship('carrier');

    board.placeShip(ship, [9, 0], 'h');
    expect(board.getTile(9, 0)).toBeInstanceOf(Object);
    expect(board.getTile(9, 4)).toBeInstanceOf(Object);

    // board.renderBoard();
});

test('place ship vertically', () => {
    const board = GameBoard();
    const ship = Ship('carrier');

    board.placeShip(ship, [1, 1], 'v');
    expect(board.getTile(1, 1)).toBeInstanceOf(Object);
    expect(board.getTile(4, 1)).toBeInstanceOf(Object);

    // board.renderBoard();
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

    boardRowH = boardRowH.map((space) => (space.getName ? space.getName() : space));
    boardRowV = boardRowV.map((space) => (space.getName ? space.getName() : space));

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

    expect(board.getTile(9, 0)).toBeInstanceOf(Object);
    expect(ship.getTimesHit()).toBe(2);
});

test('attacking same tile twice does not damage ship twice', () => {
    const board = GameBoard();
    const ship = Ship('carrier');

    board.placeShip(ship, [9, 0], 'h');

    board.receiveAttack([9, 0]);
    board.receiveAttack([9, 0]);

    expect(board.getTile(9, 0)).toBeInstanceOf(Object);
    expect(ship.getTimesHit()).toBe(1);
});

test('attack misses (and is displayed)', () => {
    const board = GameBoard();
    const ship = Ship('carrier');

    board.placeShip(ship, [9, 0], 'h');

    const expectedA = { status: 'Missed', coords: [9, 5] };
    const expectedB = { status: 'Missed', coords: [8, 0] };
    expect(board.receiveAttack([9, 5])).toMatchObject(expectedA);
    expect(board.receiveAttack([8, 0])).toMatchObject(expectedB);

    board.renderBoard();
});

test('report if all ships have been sunk', () => {
    const board = GameBoard();

    // full fleet to be placed
    const carrier = Ship('carrier');
    const battleship = Ship('battleship');
    const cruiser = Ship('cruiser');
    const submarine = Ship('submarine');
    const destroyer = Ship('destroyer');

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
    // place and sink cruiser;
    board.placeShip(cruiser, [0, 2], 'v');
    board.receiveAttack([0, 2]);
    board.receiveAttack([1, 2]);
    board.receiveAttack([2, 2]);
    // place and sink submarine;
    board.placeShip(submarine, [0, 3], 'v');
    board.receiveAttack([0, 3]);
    board.receiveAttack([1, 3]);
    board.receiveAttack([2, 3]);
    // place and sink destroyer
    board.placeShip(destroyer, [0, 4], 'v');
    board.receiveAttack([0, 4]);
    board.receiveAttack([1, 4]);

    board.renderBoard();

    // check that sunk ships are added to list
    expect(board.getShipsSunk()).toContain(
        'carrier',
        'battleship',
        'cruiser',
        'submarine',
        'destroyer',
    );
    expect(board.haveAllShipsSunk()).toBe(true);
});
