const SHIP_LENGTH = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
};

export default function Ship(shipName) {
    const name = shipName;
    // represents ship symbol as represented in board array
    const symbol = shipName.charAt(0).toUpperCase();
    // tracks if ship has been placed on the board
    let _placed = false;
    // total number of times ship has been hit
    let timesHit = 0;
    // where the ship has been hit on the grid
    const positionsHit = new Set();

    // amounts of hits a ship can take before it sinks (which equals its length)
    const shipHitPoints = SHIP_LENGTH;

    if (!(shipName in shipHitPoints)) {
        throw new Error();
    }

    function hit() {
        timesHit += 1;
        return timesHit;
    }

    function getTimesHit() {
        return timesHit;
    }

    function getName() {
        return name;
    }

    function getSymbol() {
        return symbol;
    }

    function isSunk() {
        return shipHitPoints[name] - timesHit === 0;
    }

    return {
        hit,
        positionsHit,
        getTimesHit,
        getName,
        getSymbol,
        isSunk,
        length: SHIP_LENGTH[name],
        set placed(placed) {
            _placed = placed;
        },
        get placed() {
            return _placed;
        },
    };
}
