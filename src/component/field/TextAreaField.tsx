import * as React from "react";
import {InputField, InputFieldProps} from "./element/InputField";
import {FieldComponent} from "../../definition/component/FieldComponent";
import {FIELD_EVENT} from "../../definition/event/events";

export const TextAreaField: FieldComponent<string> =
    (props: InputFieldProps<string>) => {
        let {field, tabIndex, contextValue, onFieldEvent} = props;
        let onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            let value = event.target.value;
            if (value === "") {
                onFieldEvent!(FIELD_EVENT.RESET_VALUE)
            } else {
                onFieldEvent!(FIELD_EVENT.UPDATE_VALUE, value.trim());
            }
        };
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