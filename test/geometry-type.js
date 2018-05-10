const { withErrors, withoutErrors } = require("../helper");
const geometryTypeSchema = require("../schemas").geometryTypes;

describe('Geometry types', function () {
    it('should validate "Point"', () => {
        withoutErrors(geometryTypeSchema, "Point");
    });
    it('should validate "LineString"', () => {
        withoutErrors(geometryTypeSchema, "LineString");
    });
    it('should validate "MultiPoint"', () => {
        withoutErrors(geometryTypeSchema, "MultiPoint");
    });
    it('should validate "Polygon"', () => {
        withoutErrors(geometryTypeSchema, "Polygon");
    });
    it('should validate "MultiLineString"', () => {
        withoutErrors(geometryTypeSchema, "MultiLineString");
    });
    it('should validate "MultiPolygon"', () => {
        withoutErrors(geometryTypeSchema, "MultiPolygon");
    });
    it('should validate "GeometryCollection"', () => {
        withoutErrors(geometryTypeSchema, "GeometryCollection");
    });
    it('should not validate foreign member', () => {
        withErrors(geometryTypeSchema, "just a test");
    });
});
