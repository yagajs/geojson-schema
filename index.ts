import { Options, Schema, Validator, ValidatorResult } from "jsonschema";
import * as schemas from "./schemas";

// Export for easy usage in sub modules
export {
    ValidatorResult,
    ValidationError,
    SchemaError,
    Schema,
    Options,
    RewriteFunction,
    SchemaContext,
    CustomFormat,
    CustomProperty,
    ErrorDetail,
} from  "jsonschema";

export class GeoJSONValidator extends Validator {
    constructor() {
        super();
        Object.keys(schemas)
            .map((key) => (schemas as any)[key] as Schema)
            .forEach((schema) => this.addSchema(schema as Schema));
    }
}

export function validate(instance: any, schema: any, options?: Options): ValidatorResult {
    const validator = new GeoJSONValidator();
    return validator.validate(instance, schema, options);
}

export {
    schemas,
};
