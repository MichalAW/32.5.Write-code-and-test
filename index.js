    // calculateStylePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {
};

const calculateStylePoints = (styleNotes) => {
    const min = Math.min(...styleNotes);
    const max = Math.max(...styleNotes);
    delete styleNotes[styleNotes.findIndex(i => i === min)];
    delete styleNotes[styleNotes.findIndex(i => i === max)];
   
    const styleNotesWithoutExtremeValuesSum = styleNotes.reduce((previousStyleNote, currentStyleNote) => {
        return previousStyleNote + currentStyleNote
    })
    return styleNotesWithoutExtremeValuesSum;
};

// calculateTotalPoints.js

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);

    return distancePoints + stylePoints + windFactor + gateFactor;
};

// module.exports = calculateDistancePoints;
module.exports = {calculateStylePoints};
