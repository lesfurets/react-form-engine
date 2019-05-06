import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {AllTypes, FieldTypesDetails} from "../../../src/definition/FieldTypes";

export const TypeEditor = ({type, className, onChange}) => (
    <TextField select
               value={type}
               label={"Field Type"}
               className={className}
               onChange={(event) => onChange(event.target.value)}
               margin="normal">
        {AllTypes.map(type => (<MenuItem key={type} value={type}>{FieldTypesDetails[type].label}</MenuItem>))}
    </TextField>
);

TypeEditor.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
};