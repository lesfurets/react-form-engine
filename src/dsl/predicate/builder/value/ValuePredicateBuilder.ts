import {PredicateDefinitionBuilder} from "../definition/PredicateDefinitionBuilder";
import {Predicate} from "../../data/Predicate";
import {ValueDefinedPredicate} from "../../data/leaf/value/ValueDefinedPredicate";
import {Field} from "../../../../definition/FormModel";
import {ValueEqualToFieldPredicate} from "../../data/leaf/value/ValueEqualToFieldPredicate";
import {StringPredicateBuilder} from "./StringPredicateBuilder";

export class ValuePredicateBuilder {
    parent: PredicateDefinitionBuilder;
    aString: StringPredicateBuilder;

    constructor(parent: PredicateDefinitionBuilder) {
        this.parent = parent;
        this.aString = new StringPredicateBuilder(this.parent);
    }

    defined(): Predicate {
        return this.parent.build(new ValueDefinedPredicate());
    }

    equalToField(otherField: Field): Predicate {
        return this.parent.build(new ValueEqualToFieldPredicate(otherField));
    }

}