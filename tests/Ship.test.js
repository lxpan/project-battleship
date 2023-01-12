import Ship from '../src/Ship';

// command message: ship is hit -> increment timesHit -> no need to return anything
test('ship is hit', () => {
    const ship = Ship('carrier');
    ship.hit();
    expect(ship.getTimesHit()).toBe(1);
});

test('invalid ships throw error', () => {
    expect(() => Ship('ufo')).toThrow();
});

// query message: calculate if ship has received enough hits to be sunk
test('ship is sunk', () => {
    const ship = Ship('destroyer');
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

test('ship still alive', () => {
    const ship = Ship('destroyer');
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});

/*
Query message: return something / change nothing (no side effects)
Test incoming queries by asserting what they send back

Command message: return nothing / change something
E.g. save command for a game, write something to a DB
*/
