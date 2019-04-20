import {Predicate} from "./Predicate";
import {Field} from "../../../definition/FormModel";

export class PredicateTarget implements Predicate{
}

export class FieldPredicate extends PredicateTarget{
    field: Field;
    predicate: Predicate;

    constructor(field: Field, predicate: Predicate) {
        super();
        this.field = field;
        this.predicate = predicate;
    }
}

export class SelfPredicate extends PredicateTarget{
    predicate: Predicate;

    constructor(predicate: Predicate) {
        super();
        this.predicate = predicate;
    }
}