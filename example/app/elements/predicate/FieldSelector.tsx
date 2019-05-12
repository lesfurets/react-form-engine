import * as React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {Field} from "../../../../src/definition/model/Field";

interface FieldSelectorProps {
    field: Field,
    fieldList: Field[],
    onChange: (field: Field) => void
}

export const FieldSelector: React.FunctionComponent<FieldSelectorProps> = ({field, fieldList, onChange}) => (
    <TextField select
               value={field.id}
               className={"FieldSelector"}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                   onChange(fieldList.find(field => field.id === event.target.value)|| field)}
               margin="normal">
        {fieldList.map(field => <MenuItem key={field.id} value={field.id}>{field.label}</MenuItem>)}
    </TextField>);
