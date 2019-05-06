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
import {ValidationEditor} from "../elements/ValidationEditor";
import {PropertyUpdate} from "../editor/ModelUpdater";

export const FIELD_EDITOR_EVENT = {
    EDIT_PROPERTY: "EDIT_FIELD_PROPERTY",
    ADD_VISIBILITY: "ADD_VISIBILITY",
    DELETE_VISIBILITY: "DELETE_VISIBILITY",
    ADD_VALIDATION: "ADD_VALIDATION",
    DELETE_VALIDATION: "DELETE_VALIDATION",
    DELETE: "DELETE_FIELD",
};

export class FieldEditorView extends React.Component {
    constructor(props) {
        super(props);
        this.updateProperty = this.updateProperty.bind(this);
    }

    updateProperty(key) {
        return (value) => this.props.onEvent(FIELD_EDITOR_EVENT.EDIT_PROPERTY, new PropertyUpdate(key, value))
    }

    render() {
        let {field, onEvent} = this.props;
        let hasVisibility = field.hasOwnProperty('visibilityRule');
        let hasValidation = field.hasOwnProperty('validationRule');

        return (
            <div className={"FieldEditorView"} sortable-id={field.id}>
                <CardContent className={"FieldEditorView-content"}>
                    <div className={"FieldEditorView-header"}>
                        <LabelEditor label={field.label}
                                     className="FieldEditorView-label"
                                     onChange={this.updateProperty("label")}/>
                        <TypeEditor className={"FieldEditorView-type"}
                                    type={field.type}
                                    onChange={this.updateProperty("type")}/>
                    </div>
                    <div className={"FieldEditorView-details"}>
                        {FieldTypesDetails[field.type].properties.map(property => (
                            <div key={property.key}>
                                <PropertyEditor label={property.label}
                                                value={field[property.key]}
                                                onChange={this.updateProperty(property.key)}
                                                className={`PropertyEditor-${property.key}`}/>
                            </div>
                        ))}
                        {hasVisibility ? <VisibilityEditor visibilityRule={field.visibilityRule}
                                                           onChange={this.updateProperty("visibilityRule")}
                                                           onDelete={() => onEvent(FIELD_EDITOR_EVENT.DELETE_VISIBILITY)}/> : null}
                        {hasValidation ? <ValidationEditor validationRule={field.validationRule}
                                                           onChange={this.updateProperty("visibilityRule")}
                                                           onDelete={() => onEvent(FIELD_EDITOR_EVENT.DELETE_VALIDATION)}/> : null}
                    </div>
                </CardContent>
                <CardActions className="FieldEditorView-actions" disableActionSpacing>
                    <Button className="FieldEditorView-visibility"
                            disabled={hasVisibility}
                            onClick={() => onEvent(FIELD_EDITOR_EVENT.ADD_VISIBILITY)}>Edit Visibility</Button>
                    <Button className="FieldEditorView-validation"
                            disabled={hasValidation}
                            onClick={() => onEvent(FIELD_EDITOR_EVENT.ADD_VALIDATION)}>Edit Validation</Button>
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