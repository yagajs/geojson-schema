const positions = require("./positions");

exports["1d"] = {
    type: "MultiLineString",
    coordinates: [[positions["1d"], positions["1d"]],[positions["1d"], positions["1d"]]]
};
exports["2d"] = {
    type: "MultiLineString",
    coordinates: [[positions["2d"], positions["2d"]],[positions["2d"], positions["2d"]]]
};
exports["3d"] = {
    type: "MultiLineString",
    coordinates: [[positions["3d"], positions["3d"]],[positions["3d"], positions["3d"]]]
};
exports.singleCoordinate = {
    type: "MultiLineString",
    coordinates: [[positions["3d"]],[positions["3d"]]]
};
exports.full = {
    type: "MultiLineString",
    coordinates: [[positions["3d"], positions["3d"]],[positions["3d"], positions["3d"]]]
};
exports.stringAsId = {
    id: "any id",
    type: "MultiLineString",
    coordinates: [[positions["3d"], positions["3d"]],[positions["3d"], positions["3d"]]]
};
exports.numberAsId = {
    id: 123,
    type: "MultiLineString",
    coordinates: [[positions["3d"], positions["3d"]],[positions["3d"], positions["3d"]]]
};
exports.withoutType = {
    coordinates: [[positions["2d"], positions["2d"]],[positions["2d"], positions["2d"]]]
};
exports.withoutCoordinates = {
    type: "MultiLineString",
};
