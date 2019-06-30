import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Add from "@material-ui/icons/Add";
import {
    Draggable,
    DraggableProvided,
    DraggableStateSnapshot,
    Droppable,
    DroppableProvided,
    DroppableStateSnapshot
} from "react-beautiful-dnd";


import {BlockView, BlockViewProps} from "../../../src/definition/view/BlockView";
import {EventTypes, FormEvent} from "../../../src/definition/event/Event";

import {LabelEditor} from "../elements/LabelEditor";
import {DRAG_DROP_TYPE} from "./FormEditorView";

import "../../styles/view/block-editor-view.less"

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
    }

    handleExpandClick() {
        this.setState({expanded: !this.state.expanded});
    };

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
                                <CardActions className={"BlockEditorView-actions"}>
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