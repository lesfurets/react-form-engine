export class Validation {

    isValid: boolean;
    message:string;

    constructor(isValid: boolean, message:string) {
        this.isValid = isValid;
        this.message = message;
    }

}

export const VALID = new Validation(true, "");