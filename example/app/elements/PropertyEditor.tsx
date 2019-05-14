import * as React from "react";
import TextField from "@material-ui/core/TextField";

interface PropertyEditorProps {
    label: string,
    value: string,
    className: string,
    onChange: (value: string) => void
}

export const PropertyEditor : React.FunctionComponent<PropertyEditorProps> = ({label, value, className, onChange}) => {
    return <TextField label={label}
                      value={value || ""}
                      className={`PropertyEditor ${className}`}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
                      margin="normal"/>;
};

