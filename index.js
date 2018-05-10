"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonschema_1 = require("jsonschema");
var schemas = __importStar(require("./schemas"));
exports.schemas = schemas;
// Export for easy usage in sub modules
var jsonschema_2 = require("jsonschema");
exports.ValidatorResult = jsonschema_2.ValidatorResult;
exports.ValidationError = jsonschema_2.ValidationError;
exports.SchemaError = jsonschema_2.SchemaError;
var GeoJSONValidator = /** @class */ (function (_super) {
    __extends(GeoJSONValidator, _super);
    function GeoJSONValidator() {
        var _this = _super.call(this) || this;
        Object.keys(schemas)
            .map(function (key) { return schemas[key]; })
            .forEach(function (schema) { return _this.addSchema(schema); });
        return _this;
    }
    return GeoJSONValidator;
}(jsonschema_1.Validator));
exports.GeoJSONValidator = GeoJSONValidator;
function validate(instance, schema, options) {
    var validator = new GeoJSONValidator();
    return validator.validate(instance, schema, options);
}
exports.validate = validate;
