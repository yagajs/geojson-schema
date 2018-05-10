import { Schema } from "jsonschema";

declare function require(path: string): Schema;

export const geometryTypes: Schema = require("./geometry-types.json");
export const geoJSONTypes: Schema = require("./geojson-types.json");
export const bbox: Schema = require("./bbox.json");
export const geoJSONObject: Schema = require("./geojson-object.json");
export const geometryObject: Schema = require("./geometry-object.json");
export const position: Schema = require("./position.json");
export const point: Schema = require("./point.json");
export const multiPoint: Schema = require("./multi-point.json");
export const lineString: Schema = require("./line-string.json");
export const multiLineString: Schema = require("./multi-line-string.json");
export const polygon: Schema = require("./polygon.json");
export const multiPolygon: Schema = require("./multi-polygon.json");
export const geometryCollection: Schema = require("./geometry-collection.json");
export const anyGeometry: Schema = require("./any-geometry.json");
export const feature: Schema = require("./feature.json");
export const featureCollection: Schema = require("./feature-collection.json");
