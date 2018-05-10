const positions = require("./positions");

exports["1d"] = {
    type: "MultiPoint",
    coordinates: [positions["1d"]]
};
exports["2d"] = {
    type: "MultiPoint",
    coordinates: [positions["2d"]]
};
exports["3d"] = {
    type: "MultiPoint",
    coordinates: [positions["3d"]]
};
exports.full = {
    id: "",
    type: "MultiPoint",
    coordinates: [positions["3d"]]
};
exports.stringAsId = {
    id: "any id",
    type: "MultiPoint",
    coordinates: [positions["3d"]]
};
exports.numberAsId = {
    id: 123,
    type: "MultiPoint",
    coordinates: [positions["3d"]]
};
exports.withoutType = {
    coordinates: [positions["2d"]]
};
exports.withoutCoordinates = {
    type: "MultiPoint",
};
