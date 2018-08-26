import {PredicateEvaluator} from "../predicate/PredicatesEvaluator";

export class VisibilityEvaluator {
    static evaluate(field) {
        return (context) => {
            let rule = field.visibilityRule;
            return PredicateEvaluator.evaluate(field, rule.predicate)(context) === rule.isVisible;
        }
    }
}