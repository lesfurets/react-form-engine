import React from "react";

import {FIELD_STATE} from "../wrapper/FieldWrapper";

import "../../styles/field-container.less";

export const FieldContainer = props => (
    <div className="FieldContainer">
        <div className="FieldContainer-label">{props.field.label}</div>
        {props.children}
        {props.fieldState != FIELD_STATE.ERROR ? null :
            <div className="FieldContainer-error-message">{props.validation.message}</div>}
    </div>
);