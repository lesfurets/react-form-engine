import {FieldPredicate, FieldPredicateTypes} from "./FieldPredicate";
import {ValueUtils} from "../../definition/ValueUtils";
import {Field, FieldContextState} from "../../definition/FormModel";

export class PredicateEvaluator {

    static evaluate(field: Field, predicate: FieldPredicate) {
        return (context: FieldContextState) => predicate.not !== PredicateEvaluator.evaluateType(field, predicate)(context);
    }

    static evaluateType(field: Field, predicate: FieldPredicate) {
        let fieldId = (predicate.fieldId === "") ? field.id : predicate.fieldId;
        switch (predicate.type) {
            case FieldPredicateTypes.defined:
                return (context: FieldContextState) => ValueUtils.isDefined(context[fieldId]);
            case FieldPredicateTypes.equalToValue:
                return (context: FieldContextState) => context[fieldId] === predicate.details;
            case FieldPredicateTypes.equalToField:
                return (context: FieldContextState) => context[fieldId] === context[predicate.details];
        }
        return () => true;
    }
}