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

export const isDefined = (field, errorMessage) => {
    return (context) => {
        if (isNullOrUndefined(context[field])) {
            return new Validation(false, errorMessage);
        }
        return VALID;
    }
};
