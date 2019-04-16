import {PredicateEvaluator} from "../predicate/PredicatesEvaluator";
import {VALID} from "../../definition/validation/Validation";
import {Field, FieldContextState} from "../../definition/FormModel";
import {ValidationRule} from "./ValidationRule";

export class ValidationEvaluator {
    static evaluate(field: Field) {
        return (context: FieldContextState) => {
            let rule = field.validationRule;
            if(rule){
                return PredicateEvaluator.evaluate(field, rule.predicate)(context) ? rule.validation : VALID;
            }
        }
    }
}