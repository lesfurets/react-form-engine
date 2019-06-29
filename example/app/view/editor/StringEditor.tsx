import * as React from "react";
import {PropertyEditor} from "../../definition/component/PropertyEditor";
import TextField from "@material-ui/core/TextField";

export const StringEditor: PropertyEditor<string> = ({property, value, onChange}) => (
    <TextField label={property.label}
               value={value || ""}
               className={`PropertyEditor ${property.key}`}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
               margin="normal"/>
);
