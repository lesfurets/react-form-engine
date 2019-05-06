import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import {PredicateEditor} from "./predicate/PredicateEditor";
import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import {ValidationRule} from "../../../src/definition/validation/ValidationRule";

import "../../styles/elements/validation-editor.less";
import {Validation} from "../../../src/definition/validation/Validation";

export const ValidationEditor = ({validationRule, onChange, onDelete}) => (
    <div className="ValidationEditor">
        <div className="ValidationEditor-header">
            <div className="ValidationEditor-label">Validation rule:</div>
            <IconButton onClick={onDelete}>
                <Clear/>
            </IconButton>
        </div>
        <div className="ValidationEditor-rule">
            <div className="ValidationEditor-message">
                Display error :
                <TextField value={validationRule.validation.message || ""}
                           onChange={(event) => onChange(new ValidationRule(new Validation(false, event.target.value), validationRule.predicate))}
                           fullWidth
                           margin="normal"/>
            </div>
            <div className="ValidationEditor-predicate">
                When&nbsp;
                <PredicateEditor predicate={validationRule.predicate}
                                 onChange={(predicate) => onChange(new ValidationRule(validationRule.validation, predicate))}/>
            </div>
        </div>
    </div>
);

ValidationEditor.propTypes = {
    validationRule: PropTypes.object,
    onChange: PropTypes.func,
    onDelete: PropTypes.func
};