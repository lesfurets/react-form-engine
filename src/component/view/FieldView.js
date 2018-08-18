import React from "react";
import PropTypes from "prop-types";

import {FIELD_STATE} from "../wrapper/FieldWrapper";

import "../../styles/components/view/field-view.less";

export const FieldView = ({field, fieldState, errorMessage ,children}) => {
    let hasLabel = field.label != null;
    return (
        <div className={`FieldView  ${field.type}`}>
            {hasLabel ? <div className="FieldView-label">{field.label}</div> : null}
            {children}
            {fieldState === FIELD_STATE.ERROR ?
                <div className="FieldView-error">{errorMessage}</div> : null}
        </div>
    );
};

FieldView.propTypes = {
    field: PropTypes.shape({
        label: PropTypes.string,
    }).isRequired,
    fieldState: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
};