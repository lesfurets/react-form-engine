import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {AllTypes, FieldTypesDetails} from "../../../src/definition/FieldTypes";
import {FIELD_PREDICATE_TYPE, FieldPredicate} from "../../../src/definition/FieldPredicate";
import {VisibilityBuilder} from "../../../src/definition/VisibilityUtils";
import {Visibility} from "../../../src/definition/Visibility";
import {Predicates} from "../../../src/definition/Predicates";
import {PredicateEditor} from "./PredicateEditor";

export const VisibilityEditor = ({visibility, onChange}) => (
    <div className="VisibilityEditor">
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
);

let updateVisibility = (isVisible,predicate) => {
  return new Visibility(isVisible, predicate);
};

VisibilityEditor.propTypes = {
    visibility: PropTypes.object,
    onChange: PropTypes.func
};