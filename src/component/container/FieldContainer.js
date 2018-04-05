import React from "react";

import {FIELD_STATE} from "../wrapper/FieldWrapper";

import "../../styles/field-container.less";

const FieldContainer = props => (
    <div className="field-container">
        <div className="field-label">{props.field.label}</div>
        {props.children}
        {props.fieldState != FIELD_STATE.ERROR ? null :
            <div className="field-error-message">{props.validation.message}</div>}
    </div>
);

export default FieldContainer;

