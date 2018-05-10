const { withErrors, withoutErrors } = require("../helper");
const geoJSONTypeSchema = require("../schemas").geoJSONTypes;

describe('GeoJSON types', function () {
    it('should validate "Point"', () => {
        withoutErrors(geoJSONTypeSchema, "Point");
    });
    it('should validate "LineString"', () => {
        withoutErrors(geoJSONTypeSchema, "LineString");
    });
    it('should validate "MultiPoint"', () => {
        withoutErrors(geoJSONTypeSchema, "MultiPoint");
    });
    it('should validate "Polygon"', () => {
        withoutErrors(geoJSONTypeSchema, "Polygon");
    });
    it('should validate "MultiLineString"', () => {
        withoutErrors(geoJSONTypeSchema, "MultiLineString");
    });
    it('should validate "MultiPolygon"', () => {
        withoutErrors(geoJSONTypeSchema, "MultiPolygon");
    });
    it('should validate "GeometryCollection"', () => {
        withoutErrors(geoJSONTypeSchema, "GeometryCollection");
    });
    it('should validate "Feature"', () => {
        withoutErrors(geoJSONTypeSchema, "Feature");
    });
    it('should validate "FeatureCollection"', () => {
        withoutErrors(geoJSONTypeSchema, "FeatureCollection");
    });
    it('should not validate foreign member', () => {
        withErrors(geoJSONTypeSchema, "just a test");
    });
});
