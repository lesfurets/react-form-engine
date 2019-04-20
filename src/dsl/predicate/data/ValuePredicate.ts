import {PredicateTest} from "./PredicateTest";
import {Field} from "../../../definition/FormModel";

export class ValuePredicate implements PredicateTest{
}

export class DefinedPredicate extends ValuePredicate{
}

export class EqualToPredicate extends ValuePredicate{
    value:String;

    constructor(value: String) {
        super();
        this.value = value;
    }
}

export class EqualToFieldPredicate extends ValuePredicate{
    field: Field;

    constructor(field: Field) {
        super();
        this.field = field;
    }
}