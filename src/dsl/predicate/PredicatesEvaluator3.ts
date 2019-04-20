import {FieldPredicate2, FieldPredicateTypes} from "./FieldPredicate";
import {ValueUtils} from "../../definition/ValueUtils";
import {Field, FieldContextState} from "../../definition/FormModel";

export class PredicateEvaluator3 {

    static evaluate(field: Field, predicate: FieldPredicate2) {
        return (context: FieldContextState) => predicate.not !== PredicateEvaluator3.evaluateType(field, predicate)(context);
    }

    static evaluateType(field: Field, predicate: FieldPredicate2) {
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