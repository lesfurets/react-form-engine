import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

export const FieldDetailEditor = ({details, onChange}) => (
    <TextField value={details.otherId || ""}
                      onChange={(event) => onChange({otherId: event.target.value})}
                      margin="normal"/>);

FieldDetailEditor.propTypes = {
    details: PropTypes.object,
    onChange: PropTypes.func
};