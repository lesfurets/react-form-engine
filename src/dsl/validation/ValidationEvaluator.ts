import {VALID} from "../../definition/validation/Validation";
import {Field, FieldContextState} from "../../definition/FormModel";
import {PredicateEvaluator} from "../predicate/PredicateEvaluator";

export class ValidationEvaluator {
    static evaluate(field: Field) {
        return (context: FieldContextState) => {
            let rule = field.validationRule;
            return rule && PredicateEvaluator.build(field, rule.predicate)(context) ? rule.validation : VALID;
        }
    }
}