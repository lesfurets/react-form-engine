import React from "react";
import PropTypes from "prop-types";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";

import {LabelEditor} from "../elements/LabelEditor";
import {TypeEditor} from "../elements/TypeEditor";
import {FieldTypesDetails} from "../../../src/definition/FieldTypes";
import {PropertyEditor} from "../elements/PropertyEditor";

import "../../styles/view/field-editor-view.less"
import {VisibilityEditor} from "../elements/VisibilityEditor";

export const FIELD_EDITOR_EVENT = {
    EDIT_LABEL: "EDIT_FIELD_LABEL",
    EDIT_PROPERTY: "EDIT_FIELD_PROPERTY",
    EDIT_TYPE: "EDIT_FIELD_TYPE",
    ADD_VISIBILITY: "ADD_VISIBILITY",
    CHANGE_VISIBILITY: "CHANGE_VISIBILITY",
    DELETE_VISIBILITY: "DELETE_VISIBILITY",
    DELETE: "DELETE_FIELD",
};

export class FieldEditorView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {field, onEvent} = this.props;
        let hasVisibility = field.hasOwnProperty('visibilityRule');

        return (
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
                    <div className={"FieldEditorView-details"}>
                    {FieldTypesDetails[field.type].properties.map(property => (
                        <div key={property.key}>
                            <PropertyEditor label={property.label}
                                            value={field[property.key]}
                                            onChange={(value => onEvent(FIELD_EDITOR_EVENT.EDIT_PROPERTY, {
                                                key: property.key,
                                                value: value
                                            }))}
                                            className={`PropertyEditor-${property.key}`}/>
                        </div>
                    ))}
                    {hasVisibility ? <VisibilityEditor visibility={field.visibilityRule}
                                                       onChange={(visibility) => onEvent(FIELD_EDITOR_EVENT.CHANGE_VISIBILITY, visibility)}
                                                       onDelete={() => onEvent(FIELD_EDITOR_EVENT.DELETE_VISIBILITY)}/> : null}
                    </div>
                </CardContent>
                <CardActions className="FieldEditorView-actions" disableActionSpacing>
                    <Button className="FieldEditorView-visibility"
                            disabled={hasVisibility}
                            onClick={() => onEvent(FIELD_EDITOR_EVENT.ADD_VISIBILITY)}>Edit Visibility</Button>
                    <IconButton className="FieldEditorView-delete" onClick={() => onEvent(FIELD_EDITOR_EVENT.DELETE)}>
                        <Delete/>
                    </IconButton>
                </CardActions>
            </div>

        );
    }
}

FieldEditorView.propTypes = {
    field: PropTypes.object.isRequired,
    onEvent: PropTypes.func
};