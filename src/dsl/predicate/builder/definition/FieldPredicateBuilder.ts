import {PredicateRootBuilder} from "./PredicateRootBuilder";
import {Predicate} from "../../data/Predicate";
import {FieldPredicate} from "../../data/root/FieldPredicate";
import {Field} from "../../../../definition/model/Field";

export class FieldPredicateBuilder extends PredicateRootBuilder {
    field: Field;

    constructor(field: Field) {
        super();
        this.field = field;
    }

    build(child: Predicate): Predicate {
        return new FieldPredicate(this.field, child);
    }
}