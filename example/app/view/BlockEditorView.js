import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Remove from "@material-ui/icons/Remove";

export const BLOCK_EDITOR_EVENT = {
    REMOVE: "REMOVE"
};

export const BlockEditorView = ({block, onEvent}) => (
    <Card raised className="JsonEditor">
        <CardHeader title={block.label}
                    action={
                        <IconButton onClick={() => onEvent(BLOCK_EDITOR_EVENT.REMOVE)}>
                            <Remove color="primary"/>
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