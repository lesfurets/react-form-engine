import {PredicateEvaluator} from "../predicate/evaluator/PredicateEvaluator";
import {Field} from "../../definition/model/Field";
import {FieldContext} from "../../redux/FieldContext";
import {DSLField} from "../DSLField";

export class VisibilityEvaluator {
    static evaluate(field: DSLField<Field>):(context: FieldContext)=> boolean {
        return (context: FieldContext) => {
            let rule = field.visibilityRule;
            return (rule !== undefined) && (PredicateEvaluator.build(field, rule.predicate)(context) === rule.isVisible);
        }
    }
}