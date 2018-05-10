const { GeoJSONValidator, validate, schemas } = require('./'); // @yaga/geojson-schema

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
