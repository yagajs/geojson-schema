const { GeoJSONValidator } = require("../");

const createValidator = () => new GeoJSONValidator();

const validator = createValidator();

exports.withoutErrors = (schema, value, options) => {
    const result = validator.validate(value, schema, options);
    if (result.errors.length) {
        throw new Error(`Got validation Error: ${ result.errors.join("; ") }`);
    }
};

exports.withErrors = (schema, value, options) => {
    const result = validator.validate(value, schema, options);
    if (!result.errors.length) {
        throw new Error(`Do not emit errors`);
    }
};

exports.withError = (expectedMessage, schema, value, options) => {
    const result = validator.validate(value, schema, options);
    for (const error of result.errors) {
        if (error.message === expectedMessage) {
            return;
        }
    }
    throw new Error(`Your error "${ expectedMessage }" was not emitted`);
};
