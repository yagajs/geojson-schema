const { withError, withErrors, withoutErrors } = require("../helper");
const polygonSchema = require("../schemas").polygon;
const pointValues = require("../values").points;
const polygonValues = require("../values").polygons;

describe('Polygon', function () {
    it('should not validate a polygon with 1D coordinates', () => {
        withErrors(polygonSchema, polygonValues['1d']);
    });
    it('should validate a polygon with 2D coordinates', () => {
        withoutErrors(polygonSchema, polygonValues['2d']);
    });
    it('should validate a polygon with 2D coordinates', () => {
        withoutErrors(polygonSchema, polygonValues['3d']);
    });
    it('should validate a polygon with multiple coordinates', () => {
        withoutErrors(polygonSchema, polygonValues.multiCoordinates);
    });
    it('should not validate a polygon without coordinates', () => {
        withError('requires property "coordinates"', polygonSchema, polygonValues.withoutCoordinates);
    });
    it('should not validate a polygon without a type', () => {
        withError('requires property "type"', polygonSchema, polygonValues.withoutType);
    });
    it('should not validate a point', () => {
        withErrors(polygonSchema, pointValues["2d"]);
    });
});
