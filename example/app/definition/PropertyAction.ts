import {PropertyRemoval, PropertyValueChange} from "../editor/ModelUpdater";
import {Property} from "./Property";
import {FormEvent} from "../../../src/definition/event/Event";
import {FIELD_EDITOR_EVENT} from "../view/FieldEditorView";

export class PropertyAction {
    property:Property;

    constructor(property:Property) {
        this.property = property;
    }

    change(onEvent:(e: FormEvent, details?: any) => void, value:any) {
        onEvent(FIELD_EDITOR_EVENT.UPDATE_PROPERTIES, new PropertyValueChange(this.property.key, value));
    }

    delete(onEvent:(e: FormEvent, details?: any) => void) {
        let removal = [new PropertyRemoval(this.property.key)];
        if(this.property.cleanAlso) {
            removal.push(new PropertyRemoval(this.property.cleanAlso));
        }
        onEvent(FIELD_EDITOR_EVENT.UPDATE_PROPERTIES, removal)
    }

}