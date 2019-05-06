import React from "react";
import PropTypes from "prop-types";
import * as ReactDOM from "react-dom";
import Create from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";
import $ from "jquery";
import 'jquery-ui-bundle';

import "../../styles/view/form-editor-view.less"

export const FORM_EDITOR_EVENT = {
    NEW_BLOCK: "NEW_BLOCK",
    MOVE_BLOCK: "MOVE_BLOCK"
};
export class FormEditorView extends React.Component {
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

    render() {
        let {children, onEvent} = this.props;
        return (
            <div className="FormEditorView">
                {children}
                <Button className="FormEditorView-add"
                        variant="contained"
                        onClick={() => onEvent(FORM_EDITOR_EVENT.NEW_BLOCK)}
                        color="primary">
                    <Create/> New block
                </Button>
            </div>
        );
    }
}

FormEditorView.propTypes = {
    onEvent: PropTypes.func
};