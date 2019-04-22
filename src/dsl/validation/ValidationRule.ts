import {Validation} from "../../definition/validation/Validation";
import {FieldPredicate2} from "../predicate/FieldPredicate";
import {Predicate} from "../predicate/data/Predicate";

export class ValidationRule {

    validation: Validation;
    predicate: Predicate;

    constructor(validation: Validation, predicate: Predicate) {
        this.validation = validation;
        this.predicate = predicate;
    }

}