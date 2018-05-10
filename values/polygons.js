const positions = require("./positions");

exports["1d"] = {
    type: "Polygon",
    coordinates: [[positions["1d"], positions["1d"], positions["1d"], positions["1d"]]]
};
exports["2d"] = {
    type: "Polygon",
    coordinates: [[positions["2d"], positions["2d"], positions["2d"], positions["2d"]]]
};
exports["3d"] = {
    type: "Polygon",
    coordinates: [[positions["3d"], positions["3d"], positions["3d"], positions["3d"]]]
};
exports.singleCoordinate = {
    type: "Polygon",
    coordinates: [[positions["3d"], positions["3d"]]]
};
exports.full = {
    type: "Polygon",
    coordinates: [[positions["3d"], positions["3d"], positions["3d"], positions["3d"]]]
};
exports.stringAsId = {
    id: "any id",
    type: "Polygon",
    coordinates: [[positions["3d"], positions["3d"], positions["3d"], positions["3d"]]]
};
exports.numberAsId = {
    id: 123,
    type: "Polygon",
    coordinates: [[positions["3d"], positions["3d"], positions["3d"], positions["3d"]]]
};
exports.withoutType = {
    coordinates: [[positions["2d"], positions["2d"], positions["2d"], positions["2d"]]]
};
exports.withoutCoordinates = {
    type: "Polygon",
};
