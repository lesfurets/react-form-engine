import React from "react";

import {FIELD_STATE} from "../wrapper/FieldWrapper";

import "../../styles/components/view/field-view.less";

export const FieldView = ({field, fieldState, errorMessage ,children}) => {
    let hasLabel = field.label != null;
    return (
        <div className="FieldView">
            {hasLabel ? <div className="FieldView-label">{field.label}</div> : null}
            {children}
            {fieldState == FIELD_STATE.ERROR ?
                <div className="FieldView-error">{errorMessage}</div> : null}
        </div>
    );
}