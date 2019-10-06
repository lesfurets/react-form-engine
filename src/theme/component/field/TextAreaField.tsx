import * as React from "react";
import {InputField, InputFieldProps} from "./element/InputField";
import {FieldComponent} from "../../../definition/component/FieldComponent";
import {FIELD_EVENT} from "../../../definition/event/events";
import {useTextField} from "./hook/useTextField";

export const TextAreaField: FieldComponent<string> =
    ({field, tabIndex, contextValue, onFieldEvent}: InputFieldProps<string>) => {
        const [onChange] = useTextField(onFieldEvent);

        return (
            <div className={"TextField-container"}>
                <textarea placeholder={field.placeholder || ""}
                          id={field.id}
                          name={field.id}
                          tabIndex={tabIndex}
                          rows={5}
                          maxLength={1000}
                          value={contextValue}
                          onChange={onChange}
                          onBlur={() => onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, contextValue)}/>
            </div>
        );
    };