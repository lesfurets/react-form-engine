import {VALID} from "./Validation";

export class ValidationRule {
    constructor(validation, predicate) {
        this.validation = validation;
        this.predicate = predicate;
    }

    evaluate(context) {
        console.log(this.predicate);
        return this.predicate.test(context) ? this.validation : VALID;
    }
}