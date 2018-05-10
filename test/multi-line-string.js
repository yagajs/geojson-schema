const { withError, withErrors, withoutErrors } = require("../helper");
const multiLineStringSchema = require("../schemas").multiLineString;
const pointValues = require("../values").points;
const multiLineStringValues = require("../values").multiLineStrings;

describe('MultiLineString', function () {
    it('should not validate a multi-line-string with 1D coordinates', () => {
        withErrors(multiLineStringSchema, multiLineStringValues['1d']);
    });
    it('should validate a multi-line-string with 2D coordinates', () => {
        withoutErrors(multiLineStringSchema, multiLineStringValues['2d']);
    });
    it('should validate a multi-line-string with 2D coordinates', () => {
        withoutErrors(multiLineStringSchema, multiLineStringValues['3d']);
    });
    it('should validate a multi-line-string with multiple coordinates', () => {
        withoutErrors(multiLineStringSchema, multiLineStringValues.multiCoordinates);
    });
    it('should not validate a multi-line-string without coordinates', () => {
        withError('requires property "coordinates"', multiLineStringSchema, multiLineStringValues.withoutCoordinates);
    });
    it('should not validate a multi-line-string without a type', () => {
        withError('requires property "type"', multiLineStringSchema, multiLineStringValues.withoutType);
    });
    it('should not validate a point', () => {
        withErrors(multiLineStringSchema, pointValues["2d"]);
    });
});
