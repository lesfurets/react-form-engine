import {Field} from "./model/Field";
import {Block} from "./model/Block";
import {FormData} from "./data/FormData";
import {VALID} from "./validation/Validation";
import {FormElement} from "./model/FormElement";

export class ModelUtils {
    // TODO change model : any to FormModel type
    static getFieldList(model : any):Field<any>[] {
        // TODO change block : any to Block type
        return model.blocks.reduce((flat : [], block : any) => flat.concat(block.fields), []);
    }
}

export const isBlockValid = (block: Block, fieldContext: FormData) => {
    return block.fields
        .filter(field => field.isVisible === undefined || field.isVisible(fieldContext))
        .map(field => field.getValidation === undefined ? VALID : field.getValidation(fieldContext[field.id],fieldContext))
        .map(validation => validation.isValid)
        .reduce((acc, value) => acc && value, true)
};

export const getElementIndex: <T extends FormElement>(elements: T[], target: T) => number =
    <T extends FormElement>(elements: T[], target: T) => target ?
        elements.findIndex((element) => element.id === target.id) : -1;
