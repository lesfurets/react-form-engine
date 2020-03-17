import {Predicate} from "../data/Predicate";
import {ReversedPredicate} from "../data/operation/ReversedPredicate";
import {ValueUtils} from "../../../definition/ValueUtils";
import {SelfPredicate} from "../data/root/SelfPredicate";
import {FieldPredicate} from "../data/root/FieldPredicate";
import {ValueDefinedPredicate} from "../data/leaf/value/ValueDefinedPredicate";
import {StringEqualToPredicate} from "../data/leaf/string/StringEqualToPredicate";
import {ValueEqualToFieldPredicate} from "../data/leaf/value/ValueEqualToFieldPredicate";
import {TruePredicate} from "../data/root/TruePredicate";
import {FalsePredicate} from "../data/root/FalsePredicate";
import {StringCheckPredicate} from "../data/leaf/string/StringCheckPredicate";
import {StringPredicate} from "../data/leaf/string/StringPredicate";
import {ValuePredicate} from "../data/leaf/value/ValuePredicate";
import {Field} from "../../../definition/model/Field";
import {FormData} from "../../../redux/FormData";

export class ValuePredicateEvaluator {

    static build(field: Field, predicate: ValuePredicate):(context: FormData) => boolean {
        if(predicate instanceof ValueDefinedPredicate) {
            return (context: FormData) => ValueUtils.isDefined(context[field.id]);
        }

        if(predicate instanceof ValueEqualToFieldPredicate) {
            return (context: FormData) => context[field.id] === context[predicate.field.id];
        }

        return () => true;
    }

}