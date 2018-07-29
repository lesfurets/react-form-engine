import React from "react";

import {FIELD_STATE} from "../wrapper/FieldWrapper";

import "../../styles/components/view/field-view.less";

export const FieldView = props => (
    <div className="FieldView">
        <div className="FieldView-label">{props.field.label}</div>
        {props.children}
        {props.fieldState != FIELD_STATE.ERROR ? null :
            <div className="FieldView-error-message">{props.validation.message}</div>}
    </div>
);