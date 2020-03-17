import {PredicateEvaluator} from "../predicate/evaluator/PredicateEvaluator";
import {Field} from "../../definition/model/Field";
import {FormData} from "../../definition/data/FormData";
import {DSLField} from "../DSLField";

export class VisibilityEvaluator {
    static evaluate(field: DSLField<Field>):(context: FormData)=> boolean {
        return (context: FormData) => {
            let rule = field.visibilityRule;
            return (rule !== undefined) && (PredicateEvaluator.build(field, rule.predicate)(context) === rule.isVisible);
        }
    }
}