    // calculateStylePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {
};

const calculateStylePoints = (styleNotes) => {
    const min = Math.min(styleNotes);
    const max = Math.max(styleNotes);
    const styleNotesWithoutExtremeValues = styleNotes.filter(styleNote => {
        if (styleNote !== min && styleNote !== max) {
            return true
        } else {
            return false
        }
    })
    console.log(max, min)
    const styleNotesWithoutExtremeValuesSum = styleNotesWithoutExtremeValues.reduce((previousStyleNote, currentStyleNote) => {
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
