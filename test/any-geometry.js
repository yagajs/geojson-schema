const { withErrors, withoutErrors } = require("../helper");
const anyGeometrySchema = require("../schemas").anyGeometry;
const values = require("../values");

describe('Any geometry', function () {
    it('should validate "Point"', () => {
        withoutErrors(anyGeometrySchema, values.points["2d"]);
    });
    it('should validate "LineString"', () => {
        withoutErrors(anyGeometrySchema, values.lineStrings["2d"]);
    });
    it('should validate "MultiPoint"', () => {
        withoutErrors(anyGeometrySchema, values.multiPoints["2d"]);
    });
    it('should validate "Polygon"', () => {
        withoutErrors(anyGeometrySchema, values.polygons["2d"]);
    });
    it('should validate "MultiLineString"', () => {
        withoutErrors(anyGeometrySchema, values.multiLineStrings["2d"]);
    });
    it('should validate "MultiPolygon"', () => {
        withoutErrors(anyGeometrySchema, values.multiPolygons["2d"]);
    });
    it('should validate "GeometryCollection"', () => {
        withoutErrors(anyGeometrySchema, {
            type: "GeometryCollection",
            geometries: [
                values.points["2d"],
                values.lineStrings["2d"],
                values.multiPoints["2d"],
                values.polygons["2d"],
                values.multiLineStrings["2d"],
                values.multiPolygons["2d"],
            ]
        });
    });
    it('should not validate foreign member', () => {
        withErrors(anyGeometrySchema, {
            type: "just a test",
            coordinates: [1,2,3,4]
        });
    });
});
