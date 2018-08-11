export class Validation {
    constructor(isValid, message) {
        this.isValid = isValid;
        this.message = message;
    }
}

export const VALID = new Validation(true, "");