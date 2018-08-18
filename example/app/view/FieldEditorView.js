import React from "react";
import PropTypes from "prop-types";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

import {LabelEditor} from "../elements/LabelEditor";
import {TypeEditor} from "../elements/TypeEditor";
import {FieldTypesDetails} from "../../../src/definition/FieldTypes";
import {PropertyEditor} from "../elements/PropertyEditor";

import "../../styles/view/field-editor-view.less"

export const FIELD_EDITOR_EVENT = {
    EDIT_LABEL: "EDIT_FIELD_LABEL",
    EDIT_PROPERTY: "EDIT_FIELD_PROPERTY",
    EDIT_TYPE: "EDIT_FIELD_TYPE",
    DELETE: "DELETE_FIELD",
};

export const FieldEditorView = ({field, onEvent}) => (
    <div className={"FieldEditorView"} sortable-id={field.id}>
        <CardContent className={"FieldEditorView-content"}>
            <div className={"FieldEditorView-header"}>
                <LabelEditor label={field.label}
                             className="FieldEditorView-label"
                             onChange={(value => onEvent(FIELD_EDITOR_EVENT.EDIT_LABEL, value))}/>
                <TypeEditor className={"FieldEditorView-type"}
                            type={field.type}
                            onChange={(type => onEvent(FIELD_EDITOR_EVENT.EDIT_TYPE, type))}/>
            </div>
            {FieldTypesDetails[field.type].properties.map(property => (
                <div>
                <PropertyEditor key={property.key}
                                label={property.label}
                                value={field[property.key]}
                                onChange={(value => onEvent(FIELD_EDITOR_EVENT.EDIT_PROPERTY, {key:property.key, value: value}))}
                                className={`PropertyEditor-${property.key}`}/>
                </div>
            ))}
        </CardContent>
        <CardActions className={"FieldEditorView-actions"} disableActionSpacing>
            <IconButton className="FieldEditorView-delete" onClick={() => onEvent(FIELD_EDITOR_EVENT.DELETE)}>
                <Delete/>
            </IconButton>
        </CardActions>
    </div>

);

FieldEditorView.propTypes = {
    field: PropTypes.object.isRequired,
    onEvent: PropTypes.func
};