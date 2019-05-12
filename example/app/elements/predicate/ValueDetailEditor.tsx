import * as React from "react";
import TextField from "@material-ui/core/TextField";

interface ValueDetailEditorProps {
    details: string,
    onChange: (detail: string) => void
}

export const ValueDetailEditor: React.FunctionComponent<ValueDetailEditorProps> = ({details, onChange}) => (
    <TextField value={details || ""}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
                      margin="normal"/>);

ValueDetailEditor.propTypes = {
};