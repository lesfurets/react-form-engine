export class Validation {
    constructor(isValid, message) {
        this.isValid = isValid;
        this.message = message;
    }
}

export const VALID = new Validation(true, "");

export const isNullOrUndefined = function (value) {
    return value === null || (typeof value === "undefined") || value === "UNDEFINED" || value === "";
};

export const isDefined = (field, context, errorMessage) => {
    if (isNullOrUndefined(context[field.id])) {
        return new Validation(false, errorMessage);
    }
    return VALID;
};

export const isDefinedAndEqualTo = (field, context, value, errorMessage) => {
    let contextValue = context[field.id];
    if (isNullOrUndefined(contextValue) || contextValue !== value) {
        return new Validation(false, errorMessage);
    }
    return VALID;
};

export const validate = () => console.log(this);