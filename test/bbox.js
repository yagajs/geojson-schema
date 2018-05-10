const { withErrors, withoutErrors } = require("../helper");
const boundingBoxSchema = require("../schemas").bbox;

describe('Bounding Box', function () {
    it('should validate a 2D bounding box', () => {
        withoutErrors(boundingBoxSchema, [1, 2, 3, 4]);
    });
    it('should validate a 3D bounding box', () => {
        withoutErrors(boundingBoxSchema, [1, 2, 3, 2, 3, 4]);
    });
    it('should not validate a bounding box with 5 items', () => {
        withErrors(boundingBoxSchema, [1, 2, 3, 2, 3]);
    });
});
