const { withError, withErrors, withoutErrors } = require("../helper");
const lineStringSchema = require("../schemas").lineString;
const pointValues = require("../values").points;
const lineStringValues = require("../values").lineStrings;

describe('LineString', function () {
    it('should not validate a line-string with 1D coordinates', () => {
        withErrors(lineStringSchema, lineStringValues['1d']);
    });
    it('should validate a line-string with 2D coordinates', () => {
        withoutErrors(lineStringSchema, lineStringValues['2d']);
    });
    it('should validate a line-string with 2D coordinates', () => {
        withoutErrors(lineStringSchema, lineStringValues['3d']);
    });
    it('should validate a line-string with multiple coordinates', () => {
        withoutErrors(lineStringSchema, lineStringValues.multiCoordinates);
    });
    it('should not validate a line-string without coordinates', () => {
        withError('requires property "coordinates"', lineStringSchema, lineStringValues.withoutCoordinates);
    });
    it('should not validate a line-string without a type', () => {
        withError('requires property "type"', lineStringSchema, lineStringValues.withoutType);
    });
    it('should not validate a point', () => {
        withErrors(lineStringSchema, pointValues["2d"]);
    });
});
