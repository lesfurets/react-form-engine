import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

import "../../../styles/elements/validation-editor.less";
import {ValidationRule} from "../../../../src/dsl/validation/ValidationRule";
import {Validation} from "../../../../src/definition/validation/Validation";
import {PredicateEditor} from "../../elements/predicate/PredicateEditor";
import {PropertyEditor} from "../../definition/component/PropertyEditor";


export const ValidationEditor: PropertyEditor<ValidationRule> = ({value, onChange, onDelete}) => (
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
                <TextField value={value.validation.message || ""}
                           onChange={(event) => onChange(new ValidationRule(new Validation(false, event.target.value), value.predicate))}
                           fullWidth
                           margin="normal"/>
            </div>
            <div className="ValidationEditor-predicate">
                When&nbsp;
                <PredicateEditor predicate={value.predicate}
                                 onChange={(predicate) => onChange(new ValidationRule(value.validation, predicate))}/>
            </div>
        </div>
    </div>
);