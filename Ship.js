/*
Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
*/

export default function Ship(shipName) {
    const name = shipName;
    let length;
    let sunk;
    let timesHit = 0;

    const shipHitPoints = {
        carrier: 5,
        battleship: 4,
        cruiser: 3,
        submarine: 3,
        destroyer: 2,
    };

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
        isSunk,
        getTimesHit,
        getName
    };
}
