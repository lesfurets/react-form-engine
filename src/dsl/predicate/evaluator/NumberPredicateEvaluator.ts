import {StringPredicate} from "../data/leaf/string/StringPredicate";
import {Field} from "../../../definition/model/Field";
import {FieldContext} from "../../../redux/FieldContext";
import {NumberBetweenPredicate} from "../data/leaf/number/NumberBetweenPredicate";
import {NumberCheckPredicate} from "../data/leaf/number/NumberCheckPredicate";
import {NumberEqualToPredicate} from "../data/leaf/number/NumberEqualToPredicate";
import {NumberGreaterEqualThanPredicate} from "../data/leaf/number/NumberGreaterEqualThanPredicate";
import {NumberGreaterThanPredicate} from "../data/leaf/number/NumberGreaterThanPredicate";
import {NumberLowerEqualThanPredicate} from "../data/leaf/number/NumberLowerEqualThanPredicate";
import {NumberLowerThanPredicate} from "../data/leaf/number/NumberLowerThanPredicate";

export class NumberPredicateEvaluator {

    static build(field: Field, predicate: StringPredicate):(context: FieldContext) => boolean {
        switch(predicate.constructor) {
            case NumberBetweenPredicate:
                return (context: FieldContext) => context[field.id]! >= (<NumberBetweenPredicate>predicate).min
                    && context[field.id]! <= (<NumberBetweenPredicate>predicate).max;
            case NumberCheckPredicate:
                return (context: FieldContext) => (<NumberCheckPredicate>predicate).test(<number>context[field.id]);
            case NumberEqualToPredicate:
                return (context: FieldContext) => context[field.id]! === (<NumberEqualToPredicate>predicate).value;
            case NumberGreaterEqualThanPredicate:
                return (context: FieldContext) => context[field.id]! >= (<NumberGreaterEqualThanPredicate>predicate).value;
            case NumberGreaterThanPredicate:
                return (context: FieldContext) => context[field.id]! > (<NumberGreaterThanPredicate>predicate).value;
            case NumberLowerEqualThanPredicate:
                return (context: FieldContext) => context[field.id]! <= (<NumberLowerEqualThanPredicate>predicate).value;
            case NumberLowerThanPredicate:
                return (context: FieldContext) => context[field.id]! < (<NumberLowerThanPredicate>predicate).value;
            default:
                return () => true;
        }
    }

}