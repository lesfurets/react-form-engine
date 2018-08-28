import React from "react";
import PropTypes from "prop-types";

import {FIELD_STATE} from "../wrapper/FieldWrapper";

import "../../styles/components/view/field-view.less";

export const FieldView = ({field, fieldState, errorMessage ,children, isVisible}) => {
    let hasLabel = field.label != null;
    return isVisible ? (
        <div className={`FieldView ${fieldState} ${field.id} ${field.type}`}>
            {hasLabel ? <div className="FieldView-label">{field.label}</div> : null}
            {children}
            {fieldState === FIELD_STATE.ERROR ?
                <div className="FieldView-error">{errorMessage}</div> : null}
        </div>
    ): null;
};

FieldView.propTypes = {
    field: PropTypes.shape({
        label: PropTypes.string,
    }).isRequired,
    fieldState: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    isVisible: PropTypes.bool,
};

FieldView.defaultProps = {
    isVisible: true
};