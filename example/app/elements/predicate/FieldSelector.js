import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";


export const FieldSelector = ({field, fieldList, onChange}) => (
    <TextField select
               value={field}
               className={"FieldSelector"}
               onChange={(event) => onChange(event.target.value)}
               margin="normal">
        {fieldList.map(field => <MenuItem key={field.id} value={field.id}>{field.label}</MenuItem>)}
    </TextField>);

FieldSelector.propTypes = {
    field: PropTypes.string,
    fieldList: PropTypes.array,
    onChange: PropTypes.func
};
