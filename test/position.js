const { withError, withErrors, withoutErrors } = require("../helper");
const positionSchema = require("../schemas").position;
const positionValues = require("../values").positions;

describe('Position', function () {
    it("should not validate a 1D position", () => {
        withErrors(positionSchema, positionValues["1d"]);
    });
    it("should recognize minimum length violation on 1D", () => {
        withError("does not meet minimum length of 2", positionSchema, positionValues["1d"]);
    });
    it("should validate a 2D position", () => {
        withoutErrors(positionSchema, positionValues["2d"]);
    });
    it("should validate a 3D position", () => {
        withoutErrors(positionSchema, positionValues["3d"]);
    });
    it("should not validate a position with four values", () => {
        withErrors(positionSchema, positionValues["4d"]);
    });
    it("should recognize maximum length violation on 4D", () => {
        withError("does not meet maximum length of 3", positionSchema, positionValues["4d"]);
    });
    it("should recognize additional items violation on 4D", () => {
        withError("additionalItems not permitted", positionSchema, positionValues["4d"]);
    });
    it("should recognize too small longitudes", () => {
        withError("must have a minimum value of -180", positionSchema, positionValues.tooSmallLng);
    });
    it("should recognize too large longitudes", () => {
        withError("must have a maximum value of 180", positionSchema, positionValues.tooLargeLng);
    });
    it("should recognize too small latitudes", () => {
        withError("must have a minimum value of -90", positionSchema, positionValues.tooSmallLat);
    });
    it("should recognize too large latitudes", () => {
        withError("must have a maximum value of 90", positionSchema, positionValues.tooLargeLat);
    });
});
