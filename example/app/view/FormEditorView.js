import React from "react";
import PropTypes from "prop-types";
import Create from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";

import "../../styles/view/form-editor-view.less"

export const FORM_EDITOR_EVENT = {
    NEW_BLOCK: "NEW_BLOCK"
};

export const FormEditorView = ({children, onEvent}) => (
    <div className="FormEditorView">
        {children}
        <Button className="FormEditorView-add"
                variant="extendedFab"
                onClick={() => onEvent(FORM_EDITOR_EVENT.NEW_BLOCK)}
                color="primary">
            <Create/> New block
        </Button>
    </div>
);

FormEditorView.propTypes = {
    onEvent: PropTypes.func
};