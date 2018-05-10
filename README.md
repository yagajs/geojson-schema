# JSON schema definitions and validator for GeoJSON

[![Build Status](https://travis-ci.org/yagajs/geosjson-schema.svg?branch=develop)](https://travis-ci.org/yagajs/geosjson-schema)

This module serves the JSON schema definitions for GeoJSON and a validator extended from the
[NPM](https://www.npmjs.com/) module [`jsonschema`](https://www.npmjs.com/package/jsonschema).

It serves declaration files for [TypeScript](https://www.typescriptlang.org/).

## How to use

First you have to install this library from npm:

```bash
npm install --save @yaga/geojson-schema
# OR
yarn add  @yaga/geojson-schema
```

You will find the schema definitions as single json files in the subfolder `schema` or while

Use this module with TypeScript:

```typescript
import { GeoJSONValidator, validate, schemas } from "@yaga/geojson-schema";

const point = {
    type: "Point",
    coordinates: [1, 2],
};

// With an instance of a class
const aNewValidator = new GeoJSONValidator();

console.log(
    "Validation results:",
    aNewValidator.validate(point, schemas.point),
);

// With a factory function
console.log(
    "Validation results:",
    validate(point, schemas.point),
);

```

Use the module with JavaScript:

```js
const { GeoJSONValidator, validate, schemas } = require('@yaga/geojson-schema');

const point = {
    type: "Point",
    coordinates: [1, 2],
};

// With an instance of a class
const aNewValidator = new GeoJSONValidator();

console.log(
    "Validation results:",
    aNewValidator.validate(point, schemas.point),
);

// With a factory function
console.log(
    "Validation results:",
    validate(point, schemas.point),
);
```

## Schemas

The module provides the following schemas:

```js
import { schemas } from "@yaga/geojson-schema";
// The namespace schemas includes the following schemas:
```

* `geometryTypes`: `http://geojson.org/schema/geometry-types`
* `geoJSONTypes`: `http://geojson.org/schema/geojson-types`
* `bbox`: `http://geojson.org/schema/bbox`
* `geoJSONObject`: `http://geojson.org/schema/geojson-object`
* `geometryObject`: `http://geojson.org/schema/geometry-object`
* `position`: `http://geojson.org/schema/position`
* `point`: `http://geojson.org/schema/point`
* `multiPoint`: `http://geojson.org/schema/multi-point`
* `lineString`: `http://geojson.org/schema/line-string`
* `multiLineString`: `http://geojson.org/schema/multi-line-string`
* `polygon`: `http://geojson.org/schema/polygon`
* `multiPolygon`: `http://geojson.org/schema/multi-polygon`
* `geometryCollection`: `http://geojson.org/schema/geometry-collection`
* `anyGeometry`: `http://geojson.org/schema/any-geometry`
* `feature`: `http://geojson.org/schema/feature`
* `featureCollection`: `http://geojson.org/schema/feature-collection`

*The list represents the key followed by the schema-id*

For further information look at the [GeoJSON specification](https://tools.ietf.org/html/rfc7946) or the
[TypeScript TypeDefinition for GeoJSON](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/geojson).

## Scripts Tasks

Scripts registered in package.json:

* `transpile`: Transpile TypeScript Code to JavaScript.
* `lint`: Use the linter for TypeScript Code.
* `test`: Run software-tests in node.
* `dist`: Make everything ready for a release.

## License

This library is released under the [ISC License](LICENSE).

## Links

* [YAGA-Website](https://yagajs.org)
* [Project-Website](https://geojson-schema.yagajs.org)
* [Unit-Tests](https://geojson-schema.yagajs.org/latest/browser-test/)
* [API-Documentation](https://geojson-schema.yagajs.org/latest/typedoc/)
* [GitHub](https://github.com/yagajs/geojson-schema)
* [NPM](https://www.npmjs.com/package/@yaga/geojson-schema)
