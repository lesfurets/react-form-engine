export class ModelUtils {
    static getFieldList(model) {
        return model.reduce((flat, block) => flat.concat(block.fields), []);
    }
}