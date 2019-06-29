import * as React from "react";
import {Property} from "../../definition/Property";
import {UNKNOWN_FIELD} from "../../../../src/component/field/FieldInjector";
import * as FieldProperties from "../../definition/FieldProperties";
import {StringEditor} from "./StringEditor";
import {ValidationEditor} from "./ValidationEditor";
import {VisibilityEditor} from "./VisibilityEditor";
import {Field} from "../../../../src/definition/model/Field";
import {FormEvent} from "../../../../src/definition/event/Event";
import {PropertyAction} from "../../definition/PropertyAction";

export const getComponent = (type: Property) => {
    switch (type) {
        case FieldProperties.PLACEHOLDER:
        case FieldProperties.SYMBOL:
            return StringEditor;
        case FieldProperties.VALIDATION_RULE:
            return ValidationEditor;
        case FieldProperties.VISIBILITY_RULE:
            return VisibilityEditor;
        default:
            return UNKNOWN_FIELD;
    }
};

export const getEditorFor = (property: Property, field:Field, onEvent:(e: FormEvent, details?: any) => void) => {
    const EditorComponent = getComponent(property);
    const action = new PropertyAction(property);
    return <EditorComponent property={property}
                            key={property.key}
                            value={field[property.key]}
                            onChange={(value: any) => action.change(onEvent,value)}
                            onDelete={() => action.delete(onEvent)}/>
};

