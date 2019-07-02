import * as React from "react";
import TextField from "@material-ui/core/TextField";
import {PropertyEditor} from "../../definition/component/PropertyEditor";

export const LabelPropertyEditor: PropertyEditor<string> = ({property, value, onChange}) => {
  const [focus, setFocus] = React.useState(false);
    return focus ?
        <TextField
            value={value}
            className={`LabelEditor`}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
            onBlur={() => setFocus(false)}
            margin="normal"
            autoFocus/> :
        <span className={`LabelEditor`}
              onClick={() => setFocus(true)}>{value}</span>;

};