import {VALID} from "./Validation";
import {PredicateEvaluator} from "../predicate/PredicatesEvaluator";

export class ValidationEvaluator {
    static evaluate(field) {
        return (context) => {
            let rule = field.validationRule;
            return PredicateEvaluator.evaluate(field, rule.predicate)(context) ? rule.validation : VALID;
        }
    }
}