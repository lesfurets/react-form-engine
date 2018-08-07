import React from "react";
import PropTypes from "prop-types";

import {LabelEditor} from "../elements/LabelEditor";

import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";

import "../../styles/view/field-editor-view.less"

export const FIELD_EDITOR_EVENT = {
    EDIT_LABEL: "EDIT_FIELD_LABEL",
    DELETE: "DELETE_FIELD",
};

export const FieldEditorView = ({field, onEvent}) => (
    <CardContent className={"FieldEditorView"}>
        <LabelEditor label={field.label}
                     className="FieldEditorView-label"
                     onChange={(value => onEvent(FIELD_EDITOR_EVENT.EDIT_LABEL, value))}/>
        <IconButton className="FieldEditorView-delete" onClick={() => onEvent(FIELD_EDITOR_EVENT.DELETE)}>
            <Clear color="primary"/>
        </IconButton>
    </CardContent>
);

FieldEditorView.propTypes = {
    field: PropTypes.object.isRequired,
    onEvent: PropTypes.func
};