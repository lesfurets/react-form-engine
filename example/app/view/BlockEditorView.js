import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";
import {LabelEditor} from "./LabelEditor";

import "../../styles/view/block-editor-view.less"

export const BLOCK_EDITOR_EVENT = {
    REMOVE: "REMOVE",
    EDIT_LABEL: "EDIT_LABEL"
};

function drag(ev) {
    ev.dataTransfer.setData("text", "Yataaaaaaa");
    console.log("drag",ev.target.id);
}

export const BlockEditorView = ({block, onEvent}) => (
    <Card raised
          id={block.id}
          className="BlockEditorView"
          draggable="true"
          onDragStart={drag}>
        <CardHeader title={<LabelEditor label={block.label}
                                        onChange={(value => onEvent(BLOCK_EDITOR_EVENT.EDIT_LABEL, value))}/>}
                    action={
                        <IconButton onClick={() => onEvent(BLOCK_EDITOR_EVENT.REMOVE)}>
                            <Clear color="primary"/>
                        </IconButton>
                    }/>
    </Card>
);

BlockEditorView.propTypes = {
    block: PropTypes.object.isRequired,
    blockState: PropTypes.string.isRequired,
    onValidation: PropTypes.func,
    onEvent: PropTypes.func
};