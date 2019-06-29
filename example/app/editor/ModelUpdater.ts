import {Form} from "../../../src/definition/model/Form";
import {Field} from "../../../src/definition/model/Field";
import {ModelUtils} from "../../../src/definition/ModelUtils";

export class PropertyUpdate {
    key: string;


    constructor(key: string) {
        this.key = key;
    }
}

export class PropertyValueChange extends PropertyUpdate{
    value: any;

    constructor(key: string, value: any) {
        super(key);
        this.value = value;
    }
}

export class PropertyRemoval extends PropertyUpdate{

    constructor(key: string) {
        super(key);
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
        ModelUpdater._changeFieldProperty(form, targetedField, field => toUpdate.forEach(update => {
            if(update instanceof PropertyValueChange){
                field[update.key] = update.value
            }
            if(update instanceof PropertyRemoval){
                delete field[update.key]
            }
        }));
    },
};

