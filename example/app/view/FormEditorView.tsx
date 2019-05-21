import * as React from "react";
import Create from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";
import {DragDropContext, Droppable, DroppableProvided, DroppableStateSnapshot, DropResult} from "react-beautiful-dnd";

import {EventTypes, FormEvent} from "../../../src/definition/event/Event";
import {FormView, FormViewProps} from "../../../src/definition/view/FormView";

import {BLOCK_EDITOR_EVENT} from "./BlockEditorView";

import "../../styles/view/form-editor-view.less"

export const FORM_EDITOR_EVENT = {
    NEW_BLOCK: new FormEvent("NEW_BLOCK",EventTypes.Form),
    MOVE_BLOCK: new FormEvent("MOVE_BLOCK",EventTypes.Form),
};

export const DRAG_DROP_TYPE = {
    BLOCK: "Block",
    FIELD: "Field",
};

export const FormEditorView: FormView = (props) => <FormEditorInnerView {...props}/>;

export class FormEditorInnerView extends React.Component<FormViewProps, any> {
    constructor(props:FormViewProps){
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result: DropResult) {
        console.log(result);
        switch (result.type) {
            case DRAG_DROP_TYPE.BLOCK:
                this.props.onEvent!(FORM_EDITOR_EVENT.MOVE_BLOCK, {
                    id: result.draggableId,
                    indexDst: result.destination!.index,
                });
                break;
            case DRAG_DROP_TYPE.FIELD:
                this.props.onEvent!(BLOCK_EDITOR_EVENT.MOVE_FIELD, {
                    id: result.draggableId,
                    blockSrc: result.source.droppableId,
                    blockDst: result.destination!.droppableId,
                    indexDst: result.destination!.index,
                });
                break;

        }
    }

    render() {
        const {form, children, onEvent} = this.props;
        return (
            <div className="FormEditorView">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId={form.id} type={DRAG_DROP_TYPE.BLOCK}>
                        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                            <div ref={provided.innerRef}
                                 {...provided.droppableProps}>
                                {children}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <Button className="FormEditorView-add"
                        variant="contained"
                        onClick={() => onEvent!(FORM_EDITOR_EVENT.NEW_BLOCK)}
                        color="primary">
                    <Create/> New block
                </Button>
            </div>
        );
    }
}