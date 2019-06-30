import * as React from "react";
import {PropertyEditor} from "../../definition/component/PropertyEditor";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";

export const StringEditor: PropertyEditor<string> = ({property, value, onChange, onDelete}) => (
    <div>
        <TextField label={property.label}
                   value={value || ""}
                   className={`PropertyEditor ${property.key}`}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
                   margin="normal"/>
        <IconButton onClick={onDelete} ><Clear/></IconButton>
    </div>
);
