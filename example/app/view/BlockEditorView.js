import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {LabelEditor} from "../elements/LabelEditor";
import 'jquery-ui-bundle';

import Collapse from "@material-ui/core/es/Collapse/Collapse";

import "../../styles/view/block-editor-view.less"

export const BLOCK_EDITOR_EVENT = {
    DELETE: "DELETE",
    EDIT_LABEL: "EDIT_LABEL",
    MOVE_FIELD: "MOVE_FIELD"
};

export class BlockEditorView extends React.Component {
    constructor(){
        super();
        this.state = {expanded: true};
        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDrag = this.onDrag.bind(this);
    }

    componentDidMount() {
        $(".BlockEditorView-content").sortable({
            connectWith: $(".BlockEditorView-content"),
            handle: ".FieldEditorView",
            start: this.onDrag,
            update: this.onDrop,
            dropOnEmpty: true,
        });
    }

    onDrag(details, ui) {
        ui.item.attr("block-source", details.target.getAttribute("sortable-id"));
    }

    onDrop(details, ui) {
        if (details.target === ui.item.parent()[0]) {

            let value = {
                id: ui.item.find(".FieldEditorView").attr("sortable-id"),
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

    handleExpandClick() {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        let {children, block, onEvent} = this.props;
        return (
            <Card raised
                  id={block.id}
                  className="BlockEditorView">
                <CardHeader title={<LabelEditor label={block.label}
                                                onChange={(value => onEvent(BLOCK_EDITOR_EVENT.EDIT_LABEL, value))}/>}
                            action={[
                                <IconButton key="1"
                                            onClick={this.handleExpandClick}
                                            className={`BlockEditorView-expand ${this.state.expanded ? "expanded" : ""}`}
                                            aria-expanded={this.state.expanded}
                                            aria-label="Show more">
                                    <ExpandMore color="primary"/>
                                </IconButton>,
                                <IconButton key="2" onClick={() => onEvent(BLOCK_EDITOR_EVENT.DELETE)}>
                                    <Clear color="primary"/>
                                </IconButton>
                            ]}
                            className={"BlockEditorView-header"}/>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <div className={"BlockEditorView-content"} sortable-id={block.id}>
                        {children}
                    </div>
                </Collapse>
            </Card>
        );
    }
}

BlockEditorView.propTypes = {
    block: PropTypes.object.isRequired,
    blockState: PropTypes.string.isRequired,
    onValidation: PropTypes.func,
    onEvent: PropTypes.func
};