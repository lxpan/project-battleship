const SHIP_LENGTH = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
};

export default function Ship(shipName) {
    const name = shipName;
    const symbol = shipName.charAt(0).toUpperCase();
    // tracks if ship has been placed on the board
    let _placed = false;

    let timesHit = 0;
    const positionsHit = new Set();

    // amounts of hits a ship can take before it sinks (which equals its length)
    const shipHitPoints = SHIP_LENGTH;

    if (!(shipName in shipHitPoints)) {
        throw new Error();
    }

    // function setPlaced() {
    //     placed = true;
    // }

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
