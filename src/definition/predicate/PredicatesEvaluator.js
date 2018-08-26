import {FieldPredicateTypes} from "./FieldPredicate";
import {ValueUtils} from "../ValueUtils";

export class PredicateEvaluator {

    static evaluate(field, predicate) {
        return (context) => predicate.not !== PredicateEvaluator.evaluateType(field, predicate)(context);
    }

    static evaluateType(field, predicate) {
        let fieldId = predicate.fieldId || field.id;
        switch (predicate.type) {
            case FieldPredicateTypes.defined:
                return (context) => ValueUtils.isDefined(context[fieldId]);
            case FieldPredicateTypes.equalToValue:
                return (context) => context[fieldId] === predicate.details.value;
            case FieldPredicateTypes.equalToField:
                return (context) => context[fieldId] === context[predicate.details.otherId];
        }
        return () => true;
    }
}