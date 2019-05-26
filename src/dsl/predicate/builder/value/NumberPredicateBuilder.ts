import {PredicateDefinitionBuilder} from "../definition/PredicateDefinitionBuilder";
import {Predicate} from "../../data/Predicate";
import {StringEqualToPredicate} from "../../data/leaf/string/StringEqualToPredicate";
import {StringCheckPredicate} from "../../data/leaf/string/StringCheckPredicate";
import {StringEmptyPredicate} from "../../data/leaf/string/StringEmptyPredicate";
import {StringContainPredicate} from "../../data/leaf/string/StringContainPredicate";
import {StringRegExpPredicate} from "../../data/leaf/string/StringRegExpPredicate";
import {StringStartWithPredicate} from "../../data/leaf/string/StringStartWithPredicate";
import {StringEndWithPredicate} from "../../data/leaf/string/StringEndWithPredicate";
import {NumberEqualToPredicate} from "../../data/leaf/number/NumberEqualToPredicate";
import {NumberCheckPredicate} from "../../data/leaf/number/NumberCheckPredicate";
import {NumberLowerThanPredicate} from "../../data/leaf/number/NumberLowerThanPredicate";
import {NumberLowerEqualThanPredicate} from "../../data/leaf/number/NumberLowerEqualThanPredicate";
import {NumberGreaterThanPredicate} from "../../data/leaf/number/NumberGreaterThanPredicate";
import {NumberGreaterEqualThanPredicate} from "../../data/leaf/number/NumberGreaterEqualThanPredicate";
import {NumberBetweenPredicate} from "../../data/leaf/number/NumberBetweenPredicate";

export class NumberPredicateBuilder {
    parent: PredicateDefinitionBuilder;

    constructor(parent: PredicateDefinitionBuilder) {
        this.parent = parent;
    }

    equalTo(value: number): Predicate {
        return this.parent.build(new NumberEqualToPredicate(value));
    }

    checking(predicate: (value: number) => boolean): Predicate {
        return this.parent.build(new NumberCheckPredicate(predicate));
    }

    lowerThan(value: number): Predicate {
        return this.parent.build(new NumberLowerThanPredicate(value));
    }

    lowerOrEqualTo(value: number): Predicate {
        return this.parent.build(new NumberLowerEqualThanPredicate(value));
    }

    greaterThan(value: number): Predicate {
        return this.parent.build(new NumberGreaterThanPredicate(value));
    }

    greaterOrEqualTo(value: number): Predicate {
        return this.parent.build(new NumberGreaterEqualThanPredicate(value));
    }

    between(min: number, max: number): Predicate {
        return this.parent.build(new NumberBetweenPredicate(min, max));
    }

}