import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {AllTypes, FieldTypesDetails} from "../../../src/definition/FieldTypes";
import {FIELD_PREDICATE_TYPE, FieldPredicate} from "../../../src/definition/FieldPredicate";
import {VisibilityBuilder} from "../../../src/definition/VisibilityUtils";
import {Visibility} from "../../../src/definition/Visibility";
import {Predicates} from "../../../src/definition/Predicates";

export const PredicateEditor = ({predicate, onChange}) => (
    <span className="PredicateEditor">
        if the field&nbsp;
        <TextField value={predicate.fieldId || ""}
                   onChange={(event) => onChange(updateVisibility(event.target.value, predicate.type))}
                   margin="normal"/>
        &nbsp;is&nbsp;
        <TextField select
                   value={predicate.type}
                   onChange={(event) => onChange(updateVisibility(predicate.fieldId, event.target.value))}
                   margin="normal">
            {Object.keys(FIELD_PREDICATE_TYPE).map(type => <MenuItem key={type} value={type}>{type}</MenuItem>)}
        </TextField>
    </span>
);

let updateVisibility = (fieldId,type) => {
  return new FieldPredicate(fieldId,type);
};

PredicateEditor.propTypes = {
    predicate: PropTypes.object,
    onChange: PropTypes.func
};