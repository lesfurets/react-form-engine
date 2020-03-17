import * as React from "react";
import {FieldComponentEvents, FieldEvents} from "../../../../definition/event/events";
import {FieldComponentProps} from "../../../../definition/theme/field/FieldComponent";
import {useTextField} from "../hook/useTextField";
import {TextField} from "../../../../definition/model/fields/TextField";

export interface InputFieldProps<T> extends FieldComponentProps<T, TextField>{
    inputType?: string,
    inputMode?: string,
}

export const InputField = (props: React.PropsWithChildren<InputFieldProps<string>>) => {
    let {field, tabIndex, children, inputType, inputMode, contextValue, onFieldEvent} = props;
    const [onChange] = useTextField(onFieldEvent);

    return (
        <div className="TextField-container">
            <input type={inputType}
                   inputMode={inputMode}
                   placeholder={field!.placeholder || ""}
                   name={field!.id}
                   id={field!.id}
                   tabIndex={tabIndex}
                   value={contextValue || ""}
                   onChange={onChange}
                   onBlur={() => onFieldEvent!(FieldComponentEvents.SUMBIT_VALUE, contextValue)}/>
            {children}
        </div>
    );
};

InputField.defaultProps = {
    tabIndex: 0,
    inputType: "text",
    inputMode: "text",
};