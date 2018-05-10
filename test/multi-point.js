const { withError, withErrors, withoutErrors } = require("../helper");
const multiPointSchema = require("../schemas").multiPoint;
const pointValues = require("../values").points;
const multiPointValues = require("../values").multiPoints;

describe('MultiPoint', function () {
    it('should not validate a multi-point with 1D coordinates', () => {
        withErrors(multiPointSchema, multiPointValues['1d']);
    });
    it('should validate a multi-point with 2D coordinates', () => {
        withoutErrors(multiPointSchema, multiPointValues['2d']);
    });
    it('should validate a multi-point with 2D coordinates', () => {
        withoutErrors(multiPointSchema, multiPointValues['3d']);
    });
    it('should validate a multi-point with multiple coordinates', () => {
        withoutErrors(multiPointSchema, multiPointValues.multiCoordinates);
    });
    it('should not validate a multi-point without coordinates', () => {
        withError('requires property "coordinates"', multiPointSchema, multiPointValues.withoutCoordinates);
    });
    it('should not validate a multi-point without a type', () => {
        withError('requires property "type"', multiPointSchema, multiPointValues.withoutType);
    });
    it('should not validate a point', () => {
        withErrors(multiPointSchema, pointValues["2d"]);
    });
});
