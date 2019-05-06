import {ModelUtils} from "../../../src/definition/ModelUtils";

export class ModelUpdater {
    static updateFieldProperty (form, targetedField, updater){
        ModelUtils.getFieldList(form)
            .filter(field => field.id === targetedField.id)
            .forEach(updater);
    }

    static removeFieldProperties (form, targetedField, properties){
        ModelUpdater.updateFieldProperty(form, targetedField, field => properties.forEach(prop => delete field[prop]));
    }



}

export class PropertyUpdate {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

