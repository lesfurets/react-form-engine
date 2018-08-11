import {VALID, Validation} from "./Validation";

export class ValidationUtils {

    static isNullOrUndefined = (value) => value === undefined
        || value === null
        || (typeof value === "undefined")
        || value === "UNDEFINED"
        || value === "";

    static isDefined = (field, context, errorMessage) => {
        if (ValidationUtils.isNullOrUndefined(context[field.id])) {
            return new Validation(false, errorMessage);
        }
        return VALID;
    };

    static isDefinedAndEqualTo = (field, context, value, errorMessage) => {
        let contextValue = context[field.id];
        if (ValidationUtils.isNullOrUndefined(contextValue) || contextValue !== value) {
            return new Validation(false, errorMessage);
        }
        return VALID;
    };
}
