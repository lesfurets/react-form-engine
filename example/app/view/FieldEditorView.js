import React from "react";

import "../../../src/styles/components/view/field-view.less"
import {FIELD_STATE} from "../../../src/component/wrapper/FieldWrapper";

export const FieldEditorView = (props) => (
    <div className="FieldView">
        <div className="FieldView-label">{props.field.label}</div>
        {props.children}
        {props.fieldState != FIELD_STATE.ERROR ? null :
            <div className="FieldView-error-message">{props.validation.message}</div>}
    </div>
);