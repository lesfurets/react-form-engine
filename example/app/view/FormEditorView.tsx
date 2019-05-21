import * as React from "react";
import Create from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";
// import 'jquery-ui-bundle';

import {FormView, FormViewProps} from "../../../src/definition/view/FormView";
import {EventTypes, FormEvent} from "../../../src/definition/event/Event";

import "../../styles/view/form-editor-view.less"
import {DragDropContext, Droppable, DroppableProvided, DroppableStateSnapshot, DropResult} from "react-beautiful-dnd";
import {BlockViewProps} from "../../../src/definition/view/BlockView";
import {BLOCK_EDITOR_EVENT} from "./BlockEditorView";

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
        // if (result.source.droppableId === this.props.block.id) {
        //
        //     let value = {
        //         id: ui.item.attr("sortable-id"),
        //         blockSrc: ui.item.attr("block-source"),
        //         blockDst: details.target.getAttribute("sortable-id"),
        //         index: ui.item.index()
        //     };
        //
        //     if(value.blockSrc !== value.blockDst){
        //         // If we try to move a field from one block to another, we dont want React to try to remove the dom element
        //         // after it was moved by jquery.sortable. That's why we are cancelling the jquery move.
        //         // On ne doit cancel que l'action du block courant
        //         $(".BlockEditorView-content[sortable-id=" + value.blockSrc + "]").sortable('cancel');
        //     }
        //
        //     this.props.onEvent(BLOCK_EDITOR_EVENT.MOVE_FIELD, value);
        // }
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

/*
constructor(props){
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onStop = this.onStop.bind(this);
    }

    componentDidMount() {
        $(ReactDOM.findDOMNode(this)).sortable({
            // handle: ".BlockEditorView",
            start: this.onDrag,
            update: this.onDrop,
            stop: this.onStop,
            placeholder: "FormEditorView-placeholder"
        });
    }

    onDrop(details, ui) {
        this.props.onEvent(FORM_EDITOR_EVENT.MOVE_BLOCK, {
            id: ui.item.attr('id'),
            index: ui.item.index()
        });
    }

    onDrag(details, ui) {
        ui.item.addClass("dragged");
        let height = ui.item.find(".BlockEditorView-header").outerHeight();
        ui.item.height(height);
        ui.placeholder.height(height + 40);
    }

    onStop(details, ui) {
        ui.item.removeClass("dragged");
    }
 */