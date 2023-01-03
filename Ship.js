/*
Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
*/

const SHIP_LENGTH = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
};

export default function Ship(shipName) {
    const name = shipName;
    let timesHit = 0;

    // amounts of hits a ship can take before it sinks (which equals its length)
    const shipHitPoints = SHIP_LENGTH;

    if (!(shipName in shipHitPoints)) {
        throw new Error();
    }

    function hit() {
        return ++timesHit;
    }

    function getTimesHit() {
        return timesHit;
    }

    function getName() {
        return name;
    }

    function isSunk() {
        return shipHitPoints[name] - timesHit === 0;
    }

    return {
        hit,
        getTimesHit,
        getName,
        isSunk,
        length: SHIP_LENGTH[name],
    };
}
