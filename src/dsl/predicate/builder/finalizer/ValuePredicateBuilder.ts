import {PredicateDefinitionBuilder} from "../definition/PredicateDefinitionBuilder";
import {Predicate} from "../../data/Predicate";
import {DefinedPredicate} from "../../data/leaf/DefinedPredicate";
import {EqualToPredicate} from "../../data/leaf/EqualToPredicate";
import {Field} from "../../../../definition/FormModel";
import {EqualToFieldPredicate} from "../../data/leaf/EqualToFieldPredicate";

export class ValuePredicateBuilder {
    parent: PredicateDefinitionBuilder;

    constructor(parent: PredicateDefinitionBuilder) {
        this.parent = parent
    }


    defined(): Predicate {
        return this.parent.build(new DefinedPredicate());
    }

    equalTo(value: string): Predicate {
        return this.parent.build(new EqualToPredicate(value));
    }

    equalToField(otherField: Field): Predicate {
        return this.parent.build(new EqualToFieldPredicate(otherField));
    }
}