import {ValidationRule} from "./ValidationRule";
import {VALID, Validation} from "../../definition/validation/Validation";
import {Predicate} from "../predicate/data/Predicate";

export class ValidationBuilder {
    static hasValidation(validation: Validation) {
        return new ValidationBuilder(validation)
    }

    static error(message: string) {
        return ValidationBuilder.hasValidation(new Validation(false, message));
    }

    static valid = ValidationBuilder.hasValidation(VALID);

    validation: Validation;

    constructor(validation: Validation) {
        this.validation = validation;
    }

    when(predicate: Predicate) {
        return new ValidationRule(this.validation, predicate);
    }

}

