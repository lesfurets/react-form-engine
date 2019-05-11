import * as React from "react";

import "../../styles/components/view/field-view.less";
import {FormEvent} from "../../definition/event/Event";
import {ReactNode} from "react";
import {Field, FIELD_STATE} from "../../definition/model/Field";

export interface FieldViewProps {
    field: Field
    fieldState: string
    errorMessage: string
    isVisible?: boolean
    onEvent?: (e: FormEvent, details: any) => void
    children?: ReactNode
}

export const FieldView : React.SFC<FieldViewProps> = ({field, fieldState, errorMessage ,children, isVisible = true}) => {
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

FieldView.defaultProps = {
    isVisible: true
};