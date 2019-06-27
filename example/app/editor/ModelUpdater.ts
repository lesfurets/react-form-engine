import {Form} from "../../../src/definition/model/Form";
import {Field} from "../../../src/definition/model/Field";
import {ModelUtils} from "../../../src/definition/ModelUtils";

export class PropertyUpdate {
    key: string;
    value: any;

    constructor(key: string, value: any) {
        this.key = key;
        this.value = value;
    }
}

export const ModelUpdater  = {
    _changeFieldProperty: (form: Form, targetedField: Field, updater: (field: Field) => void) => {
        ModelUtils.getFieldList(form)
            .filter(field => field.id === targetedField.id)
            .forEach(updater);
    },

    updateFieldProperty: (form: Form, targetedField: Field, updates: PropertyUpdate | PropertyUpdate[]) => {
        const toUpdate = (updates instanceof PropertyUpdate ? [updates] : updates);
        console.log(updates instanceof PropertyUpdate, toUpdate);
        ModelUpdater._changeFieldProperty(form, targetedField, field => toUpdate.forEach(update => field[update.key] = update.value));
    },

    removeFieldProperties: (form: Form, targetedField: Field, properties: string | string[]) => {
        const toDelete: string[] = (typeof properties === "string" ? [properties] : properties);
        ModelUpdater._changeFieldProperty(form, targetedField, field => toDelete.forEach(prop => delete field[prop]));
    },

};

