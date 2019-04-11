import {VisibilityEvaluator} from "./visibility/VisibilityEvaluator";
import {ValidationEvaluator} from "./validation/ValidationEvaluator";
import {ModelUtils} from "./ModelUtils";

export class ModelExtender {
    // TODO replace model :any by FormModel
    static extendModel(model : any) {
        // TODO replace field :any by Field
        ModelUtils.getFieldList(model).forEach((field : any) => ModelExtender.extendField(field));
        return model;
    }

    // TODO replace field : any to Field
    static extendField(field : any) {
        if(field.hasOwnProperty("visibilityRule")) {
            field.isVisible = VisibilityEvaluator.evaluate(field);
        }
        if(field.hasOwnProperty("validationRule")) {
            field.getValidation = ValidationEvaluator.evaluate(field);
        }
    }
}