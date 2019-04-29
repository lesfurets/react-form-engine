import {PredicateDefinitionBuilder} from "../definition/PredicateDefinitionBuilder";
import {Predicate} from "../../data/Predicate";
import {DefinedPredicate} from "../../data/leaf/DefinedPredicate";
import {Field} from "../../../../definition/FormModel";
import {EqualToFieldPredicate} from "../../data/leaf/EqualToFieldPredicate";
import {StringPredicateBuilder} from "./StringPredicateBuilder";

export class ValuePredicateBuilder {
    parent: PredicateDefinitionBuilder;
    aString: StringPredicateBuilder;

    constructor(parent: PredicateDefinitionBuilder) {
        this.parent = parent;
        this.aString = new StringPredicateBuilder(this.parent);
    }

    defined(): Predicate {
        return this.parent.build(new DefinedPredicate());
    }

    equalToField(otherField: Field): Predicate {
        return this.parent.build(new EqualToFieldPredicate(otherField));
    }

}