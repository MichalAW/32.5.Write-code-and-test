const assert = require('assert');
const points= require('./index');

// calculateDistancePoints.js
describe('formatDate', () => {
    describe('calculateStylePoints', () => {
        it('correct style points', () => {
            const stylePoints = points.calculateStylePoints([16, 16.5, 17, 16, 18])
            assert.equal(stylePoints, 49.5 )
        });
    });
});
