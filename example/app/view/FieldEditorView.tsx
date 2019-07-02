import * as React from "react";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import {Draggable, DraggableProvided, DraggableStateSnapshot} from "react-beautiful-dnd";

import {FieldView} from "../../../src/definition/view/FieldView";
import {TypeEditor} from "../elements/TypeEditor";
import {EventTypes, FormEvent} from "../../../src/definition/event/Event";
import {getTypeDetails, getUpdates} from "../definition/FieldTypesDetails";
import {DRAG_DROP_TYPE} from "./FormEditorView";
import {FormEditor} from "../editor/FormEditor";
import {FieldType} from "../../../src/definition/FieldTypes";
import {getEditorFor} from "./editor/PropertyEditorInjector";
import {AddProperty} from "./editor/common/AddProperty";
import {LABEL} from "../definition/FieldProperties";

import "../../styles/view/field-editor-view.less"

export const FIELD_EDITOR_EVENT = {
    UPDATE_PROPERTIES: new FormEvent("UPDATE_PROPERTIES", EventTypes.Field),
    DELETE: new FormEvent("DELETE_FIELD", EventTypes.Field),
};

export const FieldEditorView: FieldView = ({field, onEvent, index}) => (
    <Draggable key={field.id} draggableId={field.id} index={index} type={DRAG_DROP_TYPE.FIELD}>
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
            <div className={`FieldEditorView ${snapshot.isDragging ? "dragged" : ""}`}
                 ref={provided.innerRef}
                 {...provided.draggableProps}
                 {...provided.dragHandleProps}>
                <CardContent className={"FieldEditorView-content"}>
                    <div className={"FieldEditorView-header"}>
                        {getEditorFor(LABEL, field, onEvent!)}
                        <TypeEditor className={"FieldEditorView-type"}
                                    type={field.type}
                                    onChange={(newType: FieldType) => onEvent!(FIELD_EDITOR_EVENT.UPDATE_PROPERTIES, getUpdates(field, newType, FormEditor.MODEL!))}/>
                    </div>
                    <div className={"FieldEditorView-details"}>
                        {getTypeDetails(field.type).properties
                            .filter(property => field[property.key] !== undefined)
                            .map(property => getEditorFor(property, field, onEvent!))}
                    </div>
                </CardContent>
                <CardActions className="FieldEditorView-actions">
                    <AddProperty field={field}
                                 onAdd={(update) => onEvent!(FIELD_EDITOR_EVENT.UPDATE_PROPERTIES, update)}/>
                    <IconButton className="FieldEditorView-delete"
                                onClick={() => onEvent!(FIELD_EDITOR_EVENT.DELETE)}>
                        <Delete/>
                    </IconButton>
                </CardActions>
            </div>
        )}
    </Draggable>
);