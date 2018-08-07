import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {LabelEditor} from "../elements/LabelEditor";

import Collapse from "@material-ui/core/es/Collapse/Collapse";

import "../../styles/view/block-editor-view.less"

export const BLOCK_EDITOR_EVENT = {
    DELETE: "DELETE",
    EDIT_LABEL: "EDIT_LABEL"
};

export class BlockEditorView extends React.Component {
    constructor(){
        super();
        this.state = {expanded: false};
        this.handleExpandClick = this.handleExpandClick.bind(this);
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
                    {children}
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