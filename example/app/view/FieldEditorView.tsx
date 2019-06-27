import * as React from "react";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import {Draggable, DraggableProvided, DraggableStateSnapshot} from "react-beautiful-dnd";

import {FieldView} from "../../../src/definition/view/FieldView";

import {LabelEditor} from "../elements/LabelEditor";
import {TypeEditor} from "../elements/TypeEditor";
import {PropertyEditor} from "../elements/PropertyEditor";
import {VisibilityEditor} from "../elements/VisibilityEditor";
import {ValidationEditor} from "../elements/ValidationEditor";
import {PropertyUpdate} from "../editor/ModelUpdater";
import {EventTypes, FormEvent} from "../../../src/definition/event/Event";
import {FieldTypesDetails, getFieldTypesDetails} from "../definition/FieldTypesDetails";
import {DRAG_DROP_TYPE} from "./FormEditorView";

import "../../styles/view/field-editor-view.less"
import {Form} from "../../../src/definition/model/Form";
import {VisibilityBuilder} from "../../../src/dsl/visibility/VisibilityBuilder";
import {Predicates} from "../../../src/dsl/predicate/builder/Predicates";
import {ModelUtils} from "../../../src/definition/ModelUtils";
import {ValidationBuilder} from "../../../src/dsl/validation/ValidationBuilder";
import {FormEditor} from "../editor/FormEditor";

export const FIELD_EDITOR_EVENT = {
    EDIT_PROPERTIES: new FormEvent("EDIT_PROPERTIES", EventTypes.Field),
    DELETE_PROPERTIES: new FormEvent("DELETE_PROPERTIES", EventTypes.Field),
    DELETE: new FormEvent("DELETE_FIELD", EventTypes.Field),
};

const generateVisibilityRules = (model: Form) =>
    VisibilityBuilder.isNotVisible.when(Predicates.field(ModelUtils.getFieldList(model)[0]).is.defined());

const generateValidationRules = () =>
    ValidationBuilder.error("Error message").when(Predicates.self.is.defined());

export const FieldEditorView:FieldView = ({field, onEvent, index}) => {
        const hasVisibility = field.hasOwnProperty('visibilityRule');
        const hasValidation = field.hasOwnProperty('validationRule');
        const updateProperty = (key: string) => (value: any) => onEvent!(FIELD_EDITOR_EVENT.EDIT_PROPERTIES, new PropertyUpdate(key, value));

        return (
            <Draggable key={field.id} draggableId={field.id} index={index} type={DRAG_DROP_TYPE.FIELD}>
                {(provided:DraggableProvided, snapshot:DraggableStateSnapshot) => (
                    <div className={`FieldEditorView ${snapshot.isDragging ? "dragged" : ""}`}
                         ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}>
                        <CardContent className={"FieldEditorView-content"}>
                            <div className={"FieldEditorView-header"}>
                                <LabelEditor label={field.label!}
                                             className="FieldEditorView-label"
                                             onChange={updateProperty("label")}/>
                                <TypeEditor className={"FieldEditorView-type"}
                                            type={field.type}
                                            onChange={updateProperty("type")}/>
                            </div>
                            <div className={"FieldEditorView-details"}>
                                {getFieldTypesDetails(field.type).properties.map(property => (
                                    <div key={property.key}>
                                        <PropertyEditor label={property.label}
                                                        value={(field[property.key])}
                                                        onChange={updateProperty(property.key)}
                                                        className={`PropertyEditor-${property.key}`}/>
                                    </div>
                                ))}
                                {hasVisibility ? <VisibilityEditor visibilityRule={field.visibilityRule!}
                                                                   onChange={updateProperty("visibilityRule")}
                                                                   onDelete={() => onEvent!(
                                                                       FIELD_EDITOR_EVENT.DELETE_PROPERTIES,
                                                                       ["visibilityRule", "isVisible"]
                                                                   )}/> : null}
                                {hasValidation ? <ValidationEditor validationRule={field.validationRule!}
                                                                   onChange={updateProperty("validationRule")}
                                                                   onDelete={() => onEvent!(
                                                                       FIELD_EDITOR_EVENT.DELETE_PROPERTIES,
                                                                       ["validationRule","getValidation"]
                                                                   )}/> : null}
                            </div>
                        </CardContent>
                        <CardActions className="FieldEditorView-actions" disableActionSpacing>
                            <Button className="FieldEditorView-visibility"
                                    disabled={hasVisibility}
                                    onClick={() => onEvent!(
                                        FIELD_EDITOR_EVENT.EDIT_PROPERTIES,
                                        new PropertyUpdate("visibilityRule", generateVisibilityRules(FormEditor.MODEL!))
                                    )}>Edit Visibility</Button>
                            <Button className="FieldEditorView-validation"
                                    disabled={hasValidation}
                                    onClick={() => onEvent!(
                                        FIELD_EDITOR_EVENT.EDIT_PROPERTIES ,
                                        new PropertyUpdate("validationRule", generateValidationRules())
                                    )}>Edit Validation</Button>
                            <IconButton className="FieldEditorView-delete"
                                        onClick={() => onEvent!(FIELD_EDITOR_EVENT.DELETE)}>
                                <Delete/>
                            </IconButton>
                        </CardActions>
                    </div>
                )}
            </Draggable>
        );
}