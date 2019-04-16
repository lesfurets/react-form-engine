export class ModelUtils {
    // TODO change model : any to FormModel type
    static getFieldList(model : any) {
        // TODO change block : any to Block type
        return model.blocks.reduce((flat : [], block : any) => flat.concat(block.fields), []);
    }
}