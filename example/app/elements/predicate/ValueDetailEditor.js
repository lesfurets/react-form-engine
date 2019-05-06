import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

export const ValueDetailEditor = ({details, onChange}) => (
    <TextField value={details.value || ""}
                      onChange={(event) => onChange({value: event.target.value})}
                      margin="normal"/>);

ValueDetailEditor.propTypes = {
    details: PropTypes.object,
    onChange: PropTypes.func
};