import * as React from "react";
import Create from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";
// import 'jquery-ui-bundle';

import {FormView} from "../../../src/definition/view/FormView";
import {EventTypes, FormEvent} from "../../../src/definition/event/Event";

import "../../styles/view/form-editor-view.less"

export const FORM_EDITOR_EVENT = {
    NEW_BLOCK: new FormEvent("NEW_BLOCK",EventTypes.Form),
    MOVE_BLOCK: new FormEvent("MOVE_BLOCK",EventTypes.Form),
};

export const FormEditorView: FormView = ({children, onEvent}) => {
    return (
        <div className="FormEditorView">
            {children}
            <Button className="FormEditorView-add"
                    variant="contained"
                    onClick={() => onEvent!(FORM_EDITOR_EVENT.NEW_BLOCK)}
                    color="primary">
                <Create/> New block
            </Button>
        </div>
    );
};

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