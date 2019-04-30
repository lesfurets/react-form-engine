import {PredicateDefinitionBuilder} from "../definition/PredicateDefinitionBuilder";
import {Predicate} from "../../data/Predicate";
import {StringEqualToPredicate} from "../../data/leaf/string/StringEqualToPredicate";
import {StringCheckPredicate} from "../../data/leaf/string/StringCheckPredicate";
import {StringEmptyPredicate} from "../../data/leaf/string/StringEmptyPredicate";
import {StringContainPredicate} from "../../data/leaf/string/StringContainPredicate";
import {StringRegExpPredicate} from "../../data/leaf/string/StringRegExpPredicate";
import {StringStartWithPredicate} from "../../data/leaf/string/StringStartWithPredicate";
import {StringEndWithPredicate} from "../../data/leaf/string/StringEndWithPredicate";

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

    empty(): Predicate {
        return this.parent.build(new StringEmptyPredicate())
    }

    containing(value: string): Predicate {
        return this.parent.build(new StringContainPredicate(value))
    }

    startingWith(value: string): Predicate {
        return this.parent.build(new StringStartWithPredicate(value))
    }

    endingWith(value: string): Predicate {
        return this.parent.build(new StringEndWithPredicate(value))
    }

    matching(regExp: RegExp): Predicate {
        return this.parent.build(new StringRegExpPredicate(regExp))
    }

}