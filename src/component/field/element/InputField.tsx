import * as React from "react";
import {FIELD_EVENT} from "../../../definition/event/events";
import {FieldComponentProps} from "../../../definition/component/FieldComponent";

export interface InputFieldProps<T> extends FieldComponentProps<T>{
    inputType?: string,
    inputMode?: string,
}

export const InputField = (props: React.PropsWithChildren<InputFieldProps<string>>) => {
    let {field, tabIndex, children, inputType, inputMode, contextValue, onFieldEvent} = props;
    return (
        <div className="TextField-container">
            <input type={inputType}
                   inputMode={inputMode}
                   placeholder={field!.placeholder || ""}
                   name={field!.id}
                   id={field!.id}
                   tabIndex={tabIndex}
                   value={contextValue || ""}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => onFieldEvent!(FIELD_EVENT.UPDATE_VALUE, event.target.value.trim())}
                   onBlur={() => onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, contextValue)}/>
            {children}
        </div>
    );
};

InputField.defaultProps = {
    tabIndex: 0,
    inputType: "text",
    inputMode: "text",
};