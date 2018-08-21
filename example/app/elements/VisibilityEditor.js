import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {Visibility} from "../../../src/definition/Visibility";
import {PredicateEditor} from "./PredicateEditor";
import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

import "../../styles/elements/visibility-editor.less";

export const VisibilityEditor = ({visibility, onChange, onDelete}) => (
    <div className="VisibilityEditor">
        <div className="VisibilityEditor-header">
            <div className="VisibilityEditor-label">Visibility rule:</div>
            <IconButton onClick={onDelete}>
                <Clear/>
            </IconButton>
        </div>
        <div className="VisibilityEditor-rule">
        This field&nbsp;
        <TextField select
                   value={visibility.isVisible.toString()}
                   onChange={(event) => onChange(updateVisibility(event.target.value === 'true', visibility.predicate))}
                   margin="normal">
            <MenuItem value={"true"}>is visible</MenuItem>
            <MenuItem value={"false"}>is not visible</MenuItem>
        </TextField>
        <PredicateEditor predicate={visibility.predicate}
                         onChange={(predicate) => onChange(updateVisibility(visibility.isVisible, predicate))}/>
        </div>
    </div>
);

let updateVisibility = (isVisible,predicate) => {
  return new Visibility(isVisible, predicate);
};

VisibilityEditor.propTypes = {
    visibility: PropTypes.object,
    onChange: PropTypes.func,
    onDelete: PropTypes.func
};