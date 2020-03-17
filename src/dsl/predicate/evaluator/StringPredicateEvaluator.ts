import {StringEqualToPredicate} from "../data/leaf/string/StringEqualToPredicate";
import {StringCheckPredicate} from "../data/leaf/string/StringCheckPredicate";
import {StringPredicate} from "../data/leaf/string/StringPredicate";
import {StringEmptyPredicate} from "../data/leaf/string/StringEmptyPredicate";
import {StringContainPredicate} from "../data/leaf/string/StringContainPredicate";
import {StringStartWithPredicate} from "../data/leaf/string/StringStartWithPredicate";
import {StringEndWithPredicate} from "../data/leaf/string/StringEndWithPredicate";
import {StringRegExpPredicate} from "../data/leaf/string/StringRegExpPredicate";
import {Field} from "../../../definition/model/Field";
import {FormData} from "../../../definition/data/FormData";

export class StringPredicateEvaluator {

    static build(field: Field, predicate: StringPredicate):(context: FormData) => boolean {
        switch(predicate.constructor) {
            case StringEqualToPredicate:
                return (context: FormData) => context[field.id] === (<StringEqualToPredicate>predicate).value;
            case StringCheckPredicate:
                return (context: FormData) => (<StringCheckPredicate>predicate).test(<string>context[field.id]);
            case StringEmptyPredicate:
                return (context: FormData) => (<string>context[field.id]).length === 0;
            case StringContainPredicate:
                return (context: FormData) => (<string>context[field.id]).includes((<StringContainPredicate>predicate).value);
            case StringStartWithPredicate:
                return (context: FormData) => (<string>context[field.id]).startsWith((<StringStartWithPredicate>predicate).value);
            case StringEndWithPredicate:
                return (context: FormData) => (<string>context[field.id]).endsWith((<StringEndWithPredicate>predicate).value);
            case StringRegExpPredicate:
                return (context: FormData) => (<StringRegExpPredicate>predicate).regExp.test(<string>context[field.id]);
            default:
                return () => true;
        }
    }

}