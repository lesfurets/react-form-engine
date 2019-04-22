import {ValidationRule} from "./ValidationRule";
import {Validation} from "../../definition/validation/Validation";
import {Predicate} from "../predicate/data/Predicate";

export class ValidationBuilder {

    validation: Validation;

    constructor(validation: Validation) {
        this.validation = validation;
    }

    when(predicate: Predicate) {
        return new ValidationRule(this.validation, predicate);
    }

    static hasVisibility(validation: Validation) {
        return new ValidationBuilder(validation)
    }

    static error(message: string) {
        return ValidationBuilder.hasVisibility(new Validation(false, message));
    }

}