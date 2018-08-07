import React from "react";
import PropTypes from "prop-types";

import {LabelEditor} from "../elements/LabelEditor";

import "../../../src/styles/components/view/field-view.less"

export const FIELD_EDITOR_EVENT = {
    EDIT_LABEL: "EDIT_FIELD_LABEL",
};

export const FieldEditorView = ({field, onEvent}) => (
    <div className="FieldView">
        <LabelEditor label={field.label}
                     onChange={(value => onEvent(FIELD_EDITOR_EVENT.EDIT_LABEL, value))}/>
    </div>
);

FieldEditorView.propTypes = {
    field: PropTypes.object.isRequired,
    onEvent: PropTypes.func
};