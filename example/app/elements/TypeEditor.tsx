import * as React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {AllTypes, FieldType, FieldTypes} from "../../../src/definition/FieldTypes";
import {FieldTypesDetails} from "../definition/FieldTypesDetails";

interface TypeEditorProps {
    type: FieldType,
    className: string,
    onChange: (value: FieldType) => void
};
export const TypeEditor: React.FunctionComponent<TypeEditorProps> = ({type, className, onChange}) => (
    <TextField select
               value={type}
               label={"Field Type"}
               className={className}
               onChange={(event) => onChange(AllTypes.find(type => type === event.target.value) || AllTypes[0])}
               margin="normal">
        {AllTypes.map(type => (<MenuItem key={type} value={type}>{FieldTypesDetails[type].label}</MenuItem>))}
    </TextField>
);

