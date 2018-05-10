const positions = require("./positions");

exports["1d"] = {
    type: "Point",
    coordinates: positions["1d"]
};
exports["2d"] = {
    type: "Point",
    coordinates: positions["2d"]
};
exports["3d"] = {
    type: "Point",
    coordinates: positions["3d"]
};
exports.full = {
    id: "",
    type: "Point",
    coordinates: positions["3d"]
};
exports.stringAsId = {
    id: "any id",
    type: "Point",
    coordinates: positions["3d"]
};
exports.numberAsId = {
    id: 123,
    type: "Point",
    coordinates: positions["3d"]
};
exports.withoutType = {
    coordinates: positions["2d"]
};
exports.withoutCoordinates = {
    type: "Point",
};
exports.coordinatesArray = {
    type: "Point",
    coordinates: [positions["2d"]]
};
exports.multiCoordinates = {
    type: "Point",
    coordinates: [positions["2d"], positions["2d"]]
};