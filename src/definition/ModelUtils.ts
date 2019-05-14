import {Field} from "./model/Field";

export class ModelUtils {
    // TODO change model : any to FormModel type
    static getFieldList(model : any):Field[] {
        // TODO change block : any to Block type
        return model.blocks.reduce((flat : [], block : any) => flat.concat(block.fields), []);
    }
}