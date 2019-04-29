import {PredicateDefinitionBuilder} from "../definition/PredicateDefinitionBuilder";
import {Predicate} from "../../data/Predicate";
import {StringEqualToPredicate} from "../../data/leaf/StringEqualToPredicate";
import {ValuePredicateBuilder} from "./ValuePredicateBuilder";
import {StringCheckPredicate} from "../../data/leaf/StringCheckPredicate";

export class StringPredicateBuilder extends ValuePredicateBuilder {
    parent: PredicateDefinitionBuilder;

    constructor(parent: PredicateDefinitionBuilder) {
        super();
        this.parent = parent;
    }

    equalTo(value: string): Predicate {
        return this.parent.build(new StringEqualToPredicate(value));
    }

    checking(predicate: (value: string) => boolean): Predicate {
        return this.parent.build(new StringCheckPredicate(predicate));
    }

}