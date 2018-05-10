const { withError, withErrors, withoutErrors } = require("../helper");
const multiPolygonSchema = require("../schemas").multiPolygon;
const pointValues = require("../values").points;
const multiPolygonValues = require("../values").multiPolygons;

describe('Multi-Polygon', function () {
    it('should not validate a multiPolygon with 1D coordinates', () => {
        withErrors(multiPolygonSchema, multiPolygonValues['1d']);
    });
    it('should validate a multiPolygon with 2D coordinates', () => {
        withoutErrors(multiPolygonSchema, multiPolygonValues['2d']);
    });
    it('should validate a multiPolygon with 2D coordinates', () => {
        withoutErrors(multiPolygonSchema, multiPolygonValues['3d']);
    });
    it('should validate a multiPolygon with multiple coordinates', () => {
        withoutErrors(multiPolygonSchema, multiPolygonValues.multiCoordinates);
    });
    it('should not validate a multiPolygon without coordinates', () => {
        withError('requires property "coordinates"', multiPolygonSchema, multiPolygonValues.withoutCoordinates);
    });
    it('should not validate a multiPolygon without a type', () => {
        withError('requires property "type"', multiPolygonSchema, multiPolygonValues.withoutType);
    });
    it('should not validate a point', () => {
        withErrors(multiPolygonSchema, pointValues["2d"]);
    });
});
