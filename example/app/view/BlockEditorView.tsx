import * as React from "react";
// import $ from "jquery";
// import 'jquery-ui-bundle';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Add from "@material-ui/icons/Add";

import {LabelEditor} from "../elements/LabelEditor";

import "../../styles/view/block-editor-view.less"
import {BlockView, BlockViewProps} from "../../../src/definition/view/BlockView";
import {EventTypes, FormEvent} from "../../../src/definition/event/Event";
import {
    DragDropContext,
    Draggable, DraggableProvided, DraggableStateSnapshot,
    Droppable,
    DroppableProvided,
    DroppableStateSnapshot,
    DropResult
} from "react-beautiful-dnd";
import {DRAG_DROP_TYPE} from "./FormEditorView";

export const BLOCK_EDITOR_EVENT = {
    DELETE: new FormEvent("DELETE", EventTypes.Block),
    EDIT_LABEL: new FormEvent("EDIT_LABEL", EventTypes.Block),
    MOVE_FIELD: new FormEvent("MOVE_FIELD", EventTypes.Block),
    NEW_FIELD: new FormEvent("NEW_FIELD", EventTypes.Block),
};

export const BlockEditorView: BlockView = (props: BlockViewProps) => <BlockEditorViewInner {...props}/>

interface BlockEditorViewInnerState {
    expanded: boolean
}

export class BlockEditorViewInner extends React.Component<BlockViewProps, BlockEditorViewInnerState> {
    constructor(props: BlockViewProps) {
        super(props);
        this.state = {expanded: true};
        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    handleExpandClick() {
        this.setState({expanded: !this.state.expanded});
    };

    onDragEnd(result: DropResult) {
        this.props.onEvent!(BLOCK_EDITOR_EVENT.MOVE_FIELD, {
            id: result.draggableId,
            blockSrc: result.source.droppableId,
            blockDst: result.destination!.droppableId,
            indexDst: result.destination!.index,
        });
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
        //         // If we try to move a field from one block to another, we dont want React to try to remove the dom
        // element // after it was moved by jquery.sortable. That's why we are cancelling the jquery move. // On ne
        // doit cancel que l'action du block courant $(".BlockEditorView-content[sortable-id=" + value.blockSrc +
        // "]").sortable('cancel'); }  this.props.onEvent(BLOCK_EDITOR_EVENT.MOVE_FIELD, value); }
    }

    render() {
        let {children, block, index, onEvent} = this.props;
        return (
            <Draggable key={block.id} draggableId={block.id} index={index} type={DRAG_DROP_TYPE.BLOCK}>
                {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                    <div ref={provided.innerRef}
                         {...provided.draggableProps}>
                        <Card raised
                              id={block.id}
                              className="BlockEditorView">
                            <div {...provided.dragHandleProps}>
                            <CardHeader title={<LabelEditor label={block.label!}
                                                            className="BlockEditorView-label"
                                                            onChange={(value => onEvent!(BLOCK_EDITOR_EVENT.EDIT_LABEL, value))}/>}
                                        action={[
                                            <IconButton key="1"
                                                        onClick={this.handleExpandClick}
                                                        className={`BlockEditorView-expand ${this.state.expanded ? "expanded" : ""}`}
                                                        aria-expanded={this.state.expanded}
                                                        aria-label="Show more">
                                                <ExpandMore color="primary"/>
                                            </IconButton>,
                                            <IconButton key="2" onClick={() => onEvent!(BLOCK_EDITOR_EVENT.DELETE)}>
                                                <Clear color="primary"/>
                                            </IconButton>
                                        ]}
                                        className={"BlockEditorView-header"}/>
                            </div>
                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                <div className={"BlockEditorView-content"} sortable-id={block.id}>
                                    <Droppable droppableId={block.id} type={DRAG_DROP_TYPE.FIELD}>
                                        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                                            <div ref={provided.innerRef}
                                                 {...provided.droppableProps}>
                                                {children}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                                <CardActions className={"BlockEditorView-actions"} disableActionSpacing>
                                    <Button className="BlockEditorView-add"
                                            variant="contained"
                                            onClick={() => onEvent!(BLOCK_EDITOR_EVENT.NEW_FIELD)}>
                                        <Add/> Add field
                                    </Button>
                                </CardActions>
                            </Collapse>
                        </Card>
                    </div>
                )}
            </Draggable>
        );
    }
}

/*
componentDidMount() {
        $(".BlockEditorView-content").sortable({
            connectWith: $(".BlockEditorView-content"),
            // handle: " .FieldEditorView",
            start: this.onDrag,
            update: this.onDrop,
            stop: this.onStop,
            dropOnEmpty: true,
            placeholder: "BlockEditorView-placeholder"
        });
    }

    onDrag(details, ui) {
        ui.item.attr("block-source", details.target.getAttribute("sortable-id"));
        ui.item.addClass("dragged");
        let height = ui.item.find(".FieldEditorView-content").outerHeight();
        ui.item.height(height);
        ui.placeholder.height(height + 40);
    }

    onStop(details, ui) {
        ui.item.removeClass("dragged");
    }

    onDrop(details, ui) {
        if (details.target === ui.item.parent()[0]) {

            let value = {
                id: ui.item.attr("sortable-id"),
                blockSrc: ui.item.attr("block-source"),
                blockDst: details.target.getAttribute("sortable-id"),
                index: ui.item.index()
            };

            if(value.blockSrc !== value.blockDst){
                // If we try to move a field from one block to another, we dont want React to try to remove the dom element
                // after it was moved by jquery.sortable. That's why we are cancelling the jquery move.
                // On ne doit cancel que l'action du block courant
                $(".BlockEditorView-content[sortable-id=" + value.blockSrc + "]").sortable('cancel');
            }

            this.props.onEvent(BLOCK_EDITOR_EVENT.MOVE_FIELD, value);
        }
    }
 */