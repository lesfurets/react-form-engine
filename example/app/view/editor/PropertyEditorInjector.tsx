import * as React from "react";
import {Property} from "../../definition/Property";
import {UNKNOWN_FIELD} from "../../../../src/component/field/FieldInjector";
import * as FieldProperties from "../../definition/FieldProperties";
import {StringPropertyEditor} from "./StringPropertyEditor";
import {ValidationPropertyEditor} from "./ValidationPropertyEditor";
import {VisibilityPropertyEditor} from "./VisibilityPropertyEditor";
import {Field} from "../../../../src/definition/model/Field";
import {FormEvent} from "../../../../src/definition/event/Event";
import {PropertyAction} from "../../definition/PropertyAction";
import {ValuesPropertyEditor} from "./ValuesPropertyEditor";
import {LabelPropertyEditor} from "./LabelPropertyEditor";

export const getComponent = (type: Property) => {
    switch (type) {
        case FieldProperties.LABEL:
            return LabelPropertyEditor;
        case FieldProperties.PLACEHOLDER:
        case FieldProperties.SYMBOL:
            return StringPropertyEditor;
        case FieldProperties.VALIDATION_RULE:
            return ValidationPropertyEditor;
        case FieldProperties.VISIBILITY_RULE:
            return VisibilityPropertyEditor;
        case FieldProperties.VALUES:
            return ValuesPropertyEditor;
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

