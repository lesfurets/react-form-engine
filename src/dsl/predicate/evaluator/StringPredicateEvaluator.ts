import {StringEqualToPredicate} from "../data/leaf/string/StringEqualToPredicate";
import {StringCheckPredicate} from "../data/leaf/string/StringCheckPredicate";
import {StringPredicate} from "../data/leaf/string/StringPredicate";
import {StringEmptyPredicate} from "../data/leaf/string/StringEmptyPredicate";
import {StringContainPredicate} from "../data/leaf/string/StringContainPredicate";
import {StringStartWithPredicate} from "../data/leaf/string/StringStartWithPredicate";
import {StringEndWithPredicate} from "../data/leaf/string/StringEndWithPredicate";
import {StringRegExpPredicate} from "../data/leaf/string/StringRegExpPredicate";
import {Field} from "../../../definition/model/Field";
import {FieldContext} from "../../../definition/FieldContext";

export class StringPredicateEvaluator {

    static build(field: Field, predicate: StringPredicate):(context: FieldContext) => boolean {
        switch(predicate.constructor) {
            case StringEqualToPredicate:
                return (context: FieldContext) => context[field.id] === (<StringEqualToPredicate>predicate).value;
            case StringCheckPredicate:
                return (context: FieldContext) => (<StringCheckPredicate>predicate).test(<string>context[field.id]);
            case StringEmptyPredicate:
                return (context: FieldContext) => (<string>context[field.id]).length === 0;
            case StringContainPredicate:
                return (context: FieldContext) => (<string>context[field.id]).includes((<StringContainPredicate>predicate).value);
            case StringStartWithPredicate:
                return (context: FieldContext) => (<string>context[field.id]).startsWith((<StringStartWithPredicate>predicate).value);
            case StringEndWithPredicate:
                return (context: FieldContext) => (<string>context[field.id]).endsWith((<StringEndWithPredicate>predicate).value);
            case StringRegExpPredicate:
                return (context: FieldContext) => (<StringRegExpPredicate>predicate).regExp.test(<string>context[field.id]);
            default:
                return () => true;
        }
    }

}