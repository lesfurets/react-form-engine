import {ValuePredicate} from "./ValuePredicate";
import {Field} from "../../../../../definition/model/Field";

export class ValueEqualToFieldPredicate extends ValuePredicate {
    field: Field;

    constructor(field: Field) {
        super();
        this.field = field;
    }
}