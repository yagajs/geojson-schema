const positions = require("./positions");

exports["1d"] = {
    type: "MultiPolygon",
    coordinates: [[[positions["1d"], positions["1d"], positions["1d"], positions["1d"]]]]
};
exports["2d"] = {
    type: "MultiPolygon",
    coordinates: [[[positions["2d"], positions["2d"], positions["2d"], positions["2d"]]]]
};
exports["3d"] = {
    type: "MultiPolygon",
    coordinates: [[[positions["3d"], positions["3d"], positions["3d"], positions["3d"]]]]
};
exports.singleCoordinate = {
    type: "MultiPolygon",
    coordinates: [[[positions["3d"], positions["3d"]]]]
};
exports.full = {
    type: "MultiPolygon",
    coordinates: [[[positions["3d"], positions["3d"], positions["3d"], positions["3d"]]]]
};
exports.stringAsId = {
    id: "any id",
    type: "MultiPolygon",
    coordinates: [[[positions["3d"], positions["3d"], positions["3d"], positions["3d"]]]]
};
exports.numberAsId = {
    id: 123,
    type: "MultiPolygon",
    coordinates: [[[positions["3d"], positions["3d"], positions["3d"], positions["3d"]]]]
};
exports.withoutType = {
    coordinates: [[[positions["2d"], positions["2d"], positions["2d"], positions["2d"]]]]
};
exports.withoutCoordinates = {
    type: "MultiPolygon",
};
