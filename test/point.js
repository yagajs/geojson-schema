const { withError, withErrors, withoutErrors } = require("../helper");
const pointSchema = require("../schemas").point;
const pointValues = require("../values").points;
const multiPointValues = require("../values").multiPoints;

describe('Point', function () {
    it('should not validate a point with 1D coordinates', () => {
        withErrors(pointSchema, pointValues['1d']);
    });
    it('should validate a point with 2D coordinates', () => {
        withoutErrors(pointSchema, pointValues['2d']);
    });
    it('should validate a point with 2D coordinates', () => {
        withoutErrors(pointSchema, pointValues['3d']);
    });
    it('should not validate a point with multiple coordinates', () => {
        withErrors(pointSchema, pointValues.multiCoordinates);
    });
    it('should not validate a point with coordinates in an array', () => {
        withErrors(pointSchema, pointValues.coordinatesArray);
    });
    it('should not validate a point without coordinates', () => {
        withError('requires property "coordinates"', pointSchema, pointValues.withoutCoordinates);
    });
    it('should not validate a point without a type', () => {
        withError('requires property "type"', pointSchema, pointValues.withoutType);
    });
    it('should not validate a multi-point', () => {
        withErrors(pointSchema, multiPointValues["2d"]);
    });
});
