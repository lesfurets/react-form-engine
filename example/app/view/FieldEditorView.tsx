import * as React from "react";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";

import {LabelEditor} from "../elements/LabelEditor";
import {TypeEditor} from "../elements/TypeEditor";
import {PropertyEditor} from "../elements/PropertyEditor";

import "../../styles/view/field-editor-view.less"
import {VisibilityEditor} from "../elements/VisibilityEditor";
import {ValidationEditor} from "../elements/ValidationEditor";
import {PropertyUpdate} from "../editor/ModelUpdater";
import {FieldView} from "../../../src/definition/view/FieldView";
import {EventTypes, FormEvent} from "../../../src/definition/event/Event";
import {FieldTypesDetails} from "../definition/FieldTypesDetails";

export const FIELD_EDITOR_EVENT = {
    EDIT_PROPERTY: new FormEvent("EDIT_FIELD_PROPERTY", EventTypes.Field),
    ADD_VISIBILITY: new FormEvent("ADD_VISIBILITY", EventTypes.Field),
    DELETE_VISIBILITY: new FormEvent("DELETE_VISIBILITY", EventTypes.Field),
    ADD_VALIDATION: new FormEvent("ADD_VALIDATION", EventTypes.Field),
    DELETE_VALIDATION: new FormEvent("DELETE_VALIDATION", EventTypes.Field),
    DELETE: new FormEvent("DELETE_FIELD", EventTypes.Field),
};

export const FieldEditorView:FieldView = ({field, onEvent}) => {
        const hasVisibility = field.hasOwnProperty('visibilityRule');
        const hasValidation = field.hasOwnProperty('validationRule');
        const updateProperty = (key: string) => (value: any) => onEvent!(FIELD_EDITOR_EVENT.EDIT_PROPERTY, new PropertyUpdate(key, value))

        return (
            <div className={"FieldEditorView"} sortable-id={field.id}>
                <CardContent className={"FieldEditorView-content"}>
                    <div className={"FieldEditorView-header"}>
                        <LabelEditor label={field.label!}
                                     className="FieldEditorView-label"
                                     onChange={updateProperty("label")}/>
                        <TypeEditor className={"FieldEditorView-type"}
                                    type={field.type}
                                    onChange={updateProperty("type")}/>
                    </div>
                    {/*<div className={"FieldEditorView-details"}>*/}
                    {/*    {FieldTypesDetails[field.type].properties.map(property => (*/}
                    {/*        <div key={property.key}>*/}
                    {/*            <PropertyEditor label={property.label}*/}
                    {/*                            value={(field[property.key])}*/}
                    {/*                            onChange={updateProperty(property.key)}*/}
                    {/*                            className={`PropertyEditor-${property.key}`}/>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*    {hasVisibility ? <VisibilityEditor visibilityRule={field.visibilityRule!}*/}
                    {/*                                       onChange={updateProperty("visibilityRule")}*/}
                    {/*                                       onDelete={() => onEvent!(FIELD_EDITOR_EVENT.DELETE_VISIBILITY)}/> : null}*/}
                    {/*    {hasValidation ? <ValidationEditor validationRule={field.validationRule!}*/}
                    {/*                                       onChange={updateProperty("visibilityRule")}*/}
                    {/*                                       onDelete={() => onEvent!(FIELD_EDITOR_EVENT.DELETE_VALIDATION)}/> : null}*/}
                    {/*</div>*/}
                </CardContent>
                <CardActions className="FieldEditorView-actions" disableActionSpacing>
                    <Button className="FieldEditorView-visibility"
                            disabled={hasVisibility}
                            onClick={() => onEvent!(FIELD_EDITOR_EVENT.ADD_VISIBILITY)}>Edit Visibility</Button>
                    <Button className="FieldEditorView-validation"
                            disabled={hasValidation}
                            onClick={() => onEvent!(FIELD_EDITOR_EVENT.ADD_VALIDATION)}>Edit Validation</Button>
                    <IconButton className="FieldEditorView-delete" onClick={() => onEvent!(FIELD_EDITOR_EVENT.DELETE)}>
                        <Delete/>
                    </IconButton>
                </CardActions>
            </div>

        );
}