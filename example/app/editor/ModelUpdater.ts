import {Form} from "../../../src/definition/model/Form";
import {Field} from "../../../src/definition/model/Field";
import {ModelUtils} from "../../../src/definition/ModelUtils";

const updateFieldProperty = (form: Form, targetedField: Field, updater: (field: Field) => void) => {
    ModelUtils.getFieldList(form)
        .filter(field => field.id === targetedField.id)
        .forEach(updater);
};

const removeFieldProperties = (form: Form, targetedField: Field, properties: string[]) => {
    updateFieldProperty(form, targetedField, field => properties.forEach(prop => delete field[prop]));
};

export class PropertyUpdate {
    key: string;
    value: any;

    constructor(key: string, value: any) {
        this.key = key;
        this.value = value;
    }
}

