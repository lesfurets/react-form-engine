import {PredicateRootBuilder} from "./PredicateRootBuilder";
import {Field} from "../../../../definition/FormModel";
import {Predicate} from "../../data/Predicate";
import {FieldPredicate} from "../../data/root/FieldPredicate";

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