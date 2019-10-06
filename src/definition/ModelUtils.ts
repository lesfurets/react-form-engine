import {Field} from "./model/Field";
import {Block} from "./model/Block";
import {FieldContext} from "./FieldContext";
import {VALID} from "./validation/Validation";

export class ModelUtils {
    // TODO change model : any to FormModel type
    static getFieldList(model : any):Field[] {
        // TODO change block : any to Block type
        return model.blocks.reduce((flat : [], block : any) => flat.concat(block.fields), []);
    }
}

export const isBlockValid = (block: Block, fieldContext: FieldContext) => {
    return block.fields
        .filter(field => field.isVisible === undefined || field.isVisible(fieldContext))
        .map(field => field.getValidation === undefined ? VALID : field.getValidation(fieldContext))
        .map(validation => validation.isValid)
        .reduce((acc, value) => acc && value, true)
};