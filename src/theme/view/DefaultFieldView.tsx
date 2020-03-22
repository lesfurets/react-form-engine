import * as React from "react";

import {FIELD_STATE} from "../../definition/model/Field";
import {FieldView} from "../../definition/theme/view/FieldView";

import "./DefaultFieldView.scss";
import {useField} from "../../definition/model/access/useField";

export const DefaultFieldView : FieldView = ({fieldState, errorMessage ,children, isVisible = true}) => {
    const field = useField();
    const hasLabel = field.label != null;
    return isVisible ? (
        <div className={`DefaultFieldView ${fieldState} ${field.id} ${field.type}`}>
            {hasLabel ? <div className="DefaultFieldView-label">{field.label}</div> : null}
            {children}
            {fieldState === FIELD_STATE.ERROR ?
                <div className="DefaultFieldView-error">{errorMessage}</div> : null}
        </div>
    ): null;
};

DefaultFieldView.defaultProps = {
    isVisible: true
};