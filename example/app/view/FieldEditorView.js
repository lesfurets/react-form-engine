import React from "react";
import PropTypes from "prop-types";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";

import {LabelEditor} from "../elements/LabelEditor";
import {TypeEditor} from "../elements/TypeEditor";


import "../../styles/view/field-editor-view.less"

export const FIELD_EDITOR_EVENT = {
    EDIT_LABEL: "EDIT_FIELD_LABEL",
    EDIT_TYPE: "EDIT_FIELD_TYPE",
    DELETE: "DELETE_FIELD",
};

export const FieldEditorView = ({field, onEvent}) => (
    <div className={"FieldEditorView"}>
        <CardContent className={"FieldEditorView-content"} sortable-id={field.id}>
            <LabelEditor label={field.label}
                         className="FieldEditorView-label"
                         onChange={(value => onEvent(FIELD_EDITOR_EVENT.EDIT_LABEL, value))}/>
            <TypeEditor className={"FieldEditorView-type"}
                        type={field.type}
                        onChange={(type => onEvent(FIELD_EDITOR_EVENT.EDIT_TYPE, type))}/>
        </CardContent>
        <CardActions className={"FieldEditorView-actions"} disableActionSpacing>
            <IconButton className="FieldEditorView-delete" onClick={() => onEvent(FIELD_EDITOR_EVENT.DELETE)}>
                <Clear color="primary"/>
            </IconButton>
        </CardActions>
    </div>

);

FieldEditorView.propTypes = {
    field: PropTypes.object.isRequired,
    onEvent: PropTypes.func
};