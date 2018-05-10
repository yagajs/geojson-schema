const positions = require("./positions");

exports["1d"] = {
    type: "LineString",
    coordinates: [positions["1d"], positions["1d"]]
};
exports["2d"] = {
    type: "LineString",
    coordinates: [positions["2d"], positions["2d"]]
};
exports["3d"] = {
    type: "LineString",
    coordinates: [positions["3d"], positions["3d"]]
};
exports.singleCoordinate = {
    type: "LineString",
    coordinates: [positions["3d"]]
};
exports.full = {
    type: "LineString",
    coordinates: [positions["3d"], positions["3d"]]
};
exports.stringAsId = {
    id: "any id",
    type: "LineString",
    coordinates: [positions["3d"], positions["3d"]]
};
exports.numberAsId = {
    id: 123,
    type: "LineString",
    coordinates: [positions["3d"], positions["3d"]]
};
exports.withoutType = {
    coordinates: [positions["2d"], positions["2d"]]
};
exports.withoutCoordinates = {
    type: "LineString",
};
