import {PredicateDefinitionBuilder} from "../definition/PredicateDefinitionBuilder";
import {Predicate} from "../../data/Predicate";
import {EqualToPredicate} from "../../data/leaf/EqualToPredicate";
import {ValuePredicateBuilder} from "./ValuePredicateBuilder";

export class StringPredicateBuilder extends ValuePredicateBuilder {
    parent: PredicateDefinitionBuilder;

    constructor(parent: PredicateDefinitionBuilder) {
        super();
        this.parent = parent;
    }

    equalTo(value: string): Predicate {
        return this.parent.build(new EqualToPredicate(value));
    }

}