import {PredicateDefinitionBuilder} from "../definition/PredicateDefinitionBuilder";
import {Predicate} from "../../data/Predicate";
import {StringEqualToPredicate} from "../../data/leaf/string/StringEqualToPredicate";
import {StringCheckPredicate} from "../../data/leaf/string/StringCheckPredicate";

export class StringPredicateBuilder {
    parent: PredicateDefinitionBuilder;

    constructor(parent: PredicateDefinitionBuilder) {
        this.parent = parent;
    }

    equalTo(value: string): Predicate {
        return this.parent.build(new StringEqualToPredicate(value));
    }

    checking(predicate: (value: string) => boolean): Predicate {
        return this.parent.build(new StringCheckPredicate(predicate));
    }

}