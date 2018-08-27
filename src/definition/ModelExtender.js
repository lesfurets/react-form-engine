import {VisibilityEvaluator} from "./visibility/VisibilityEvaluator";
import {ValidationEvaluator} from "./validation/ValidationEvaluator";
import {ModelUtils} from "./ModelUtils";

export class ModelExtender {
    static extendModel(model) {
        ModelUtils.getFieldList(model).forEach(field => ModelExtender.extendField(field));
        return model;
    }

    static extendField(field) {
        if(field.hasOwnProperty("visibilityRule")) {
            field.isVisible = VisibilityEvaluator.evaluate(field);
        }
        if(field.hasOwnProperty("validationRule")) {
            field.getValidation = ValidationEvaluator.evaluate(field);
        }
    }
}