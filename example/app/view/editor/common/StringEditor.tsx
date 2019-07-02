import * as React from "react";
import {PropertyEditor} from "../../../definition/component/PropertyEditor";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";
import {Property} from "../../../definition/Property";

export interface StringEditorProps {
    label?: string,
    value: string,
    onChange: (value: string) => void,
    onDelete: () => void,
}

export const StringEditor: React.FunctionComponent<StringEditorProps> = ({label, value, onChange, onDelete}) => (
    <div>
        <TextField label={label}
                   value={value || ""}
                   className={`PropertyEditor`}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
                   margin="normal"/>
        <IconButton size={'small'} onClick={onDelete} ><Clear/></IconButton>
    </div>
);
