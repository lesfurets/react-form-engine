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
import {PropertyValueChange,PropertyRemoval, PropertyUpdate} from "../editor/ModelUpdater";
import {EventTypes, FormEvent} from "../../../src/definition/event/Event";
import {getFieldTypesDetails} from "../definition/FieldTypesDetails";
import {DRAG_DROP_TYPE} from "./FormEditorView";

import "../../styles/view/field-editor-view.less"
import {Form} from "../../../src/definition/model/Form";
import {VisibilityBuilder} from "../../../src/dsl/visibility/VisibilityBuilder";
import {Predicates} from "../../../src/dsl/predicate/builder/Predicates";
import {ModelUtils} from "../../../src/definition/ModelUtils";
import {ValidationBuilder} from "../../../src/dsl/validation/ValidationBuilder";
import {FormEditor} from "../editor/FormEditor";
import {FieldType} from "../../../src/definition/FieldTypes";
import * as PROPERTIES from "../definition/FieldProperties";
import {getEditorFor} from "./editor/EditorInjector";

export const FIELD_EDITOR_EVENT = {
    UPDATE_PROPERTIES: new FormEvent("UPDATE_PROPERTIES", EventTypes.Field),
    DELETE: new FormEvent("DELETE_FIELD", EventTypes.Field),
};

const generateVisibilityRules = (model: Form) =>
    VisibilityBuilder.isNotVisible.when(Predicates.field(ModelUtils.getFieldList(model)[0]).is.defined());

const generateValidationRules = () =>
    ValidationBuilder.error("Error message").when(Predicates.self.is.defined());



export const FieldEditorView:FieldView = ({field, onEvent, index}) => {
        const hasVisibility = field.hasOwnProperty('visibilityRule');
        const hasValidation = field.hasOwnProperty('validationRule');
        const updateType = (type: FieldType) => {
            const updates: PropertyUpdate[]  = [new PropertyValueChange("type", type)];
            const details = getFieldTypesDetails(type);
            Object.values(PROPERTIES).forEach(property => {
                if(!details.properties.includes(property) && field[property.key] !== undefined){
                    updates.push(new PropertyRemoval(property.key));
                }
                else if(details.properties.includes(property)
                    && field[property.key] === undefined
                    && property.defaultValue !== undefined){
                    updates.push(new PropertyValueChange(property.key, property.defaultValue));
                }
            });
            onEvent!(FIELD_EDITOR_EVENT.UPDATE_PROPERTIES, updates);
        }

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
                                             onChange={(value: any) => onEvent!(FIELD_EDITOR_EVENT.UPDATE_PROPERTIES, new PropertyValueChange("label", value))}/>
                                <TypeEditor className={"FieldEditorView-type"}
                                            type={field.type}
                                            onChange={updateType}/>
                            </div>
                            <div className={"FieldEditorView-details"}>
                                {getFieldTypesDetails(field.type).properties
                                    .filter(property => field[property.key] !== undefined)
                                    .map(property => getEditorFor(property, field, onEvent!))}
                            </div>
                        </CardContent>
                        <CardActions className="FieldEditorView-actions" disableActionSpacing>
                            <Button className="FieldEditorView-visibility"
                                    disabled={hasVisibility}
                                    onClick={() => onEvent!(
                                        FIELD_EDITOR_EVENT.UPDATE_PROPERTIES,
                                        new PropertyValueChange("visibilityRule", generateVisibilityRules(FormEditor.MODEL!))
                                    )}>Edit Visibility</Button>
                            <Button className="FieldEditorView-validation"
                                    disabled={hasValidation}
                                    onClick={() => onEvent!(
                                        FIELD_EDITOR_EVENT.UPDATE_PROPERTIES ,
                                        new PropertyValueChange("validationRule", generateValidationRules())
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