import * as React from "react";
import {InputField, InputFieldProps} from "./element/InputField";
import {FieldComponent} from "../../definition/component/FieldComponent";
import {FIELD_EVENT} from "../../definition/event/events";
import {useEffect} from "react";

const PLEASE_SELECT_UNDEFINED = "PLEASE_SELECT_UNDEFINED";

export const RadioField: FieldComponent<string> =
    ({contextValue, onFieldEvent, field}: InputFieldProps<string>) => {
        useEffect(() => {
            if(contextValue === undefined && field.defaultValue) {
                onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, field.defaultValue!.id);
            }
        },[]);

        let onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            let value = event.target.value;
            if (value === PLEASE_SELECT_UNDEFINED) {
                onFieldEvent!(FIELD_EVENT.RESET_VALUE)
            } else {
                onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, value);
            }
        };

        return (
            <div className="RadioField-container">
                {field.values!.map(value => (
                    <label key={value.id}
                           onClick={() => onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, value.id)}
                           className={`RadioField-value ${value.id === contextValue ? "checked" : ""}`}>
                        {value.label}
                        <input type="radio" name={field.id} className="RadioField-input"/>
                        <span className="RadioField-check"/>
                    </label>
                ))}
            </div>
        );
    };