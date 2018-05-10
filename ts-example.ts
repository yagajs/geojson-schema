import { GeoJSONValidator, schemas, validate } from "./"; // "@yaga/geojson-schema";

const point = {
    coordinates: [1, 2],
    type: "Point",
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
