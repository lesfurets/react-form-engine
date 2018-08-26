import {VisibilityEvaluator} from "./visibility/VisibilityEvaluator";
import {ValidationEvaluator} from "./validation/ValidationEvaluator";

export class ModelExtender {
    static extendModel(model) {
        model.reduce((flat, block) => flat.concat(block.fields), [])
            .forEach(field => ModelExtender.extendField(field));
        return model;
    }

    static extendField(field) {
        if(field.hasOwnProperty("visibilityRule")) {
            field.isVisible = VisibilityEvaluator.evaluate(field);
        }
        if(field.hasOwnProperty("validationRule")) {
            field.getValidation = ValidationEvaluator.evaluate(field);
        }
        field;
    }
}