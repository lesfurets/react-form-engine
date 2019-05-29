import * as React from "react";
import {InputField, InputFieldProps} from "./element/InputField";
import {FieldComponent} from "../../definition/component/FieldComponent";
import {FIELD_EVENT} from "../../definition/event/events";
import {useEffect} from "react";
import {FieldValue} from "../../definition/model/Field";

export const RadioField: FieldComponent<string> =
    ({contextValue, onFieldEvent, field}: InputFieldProps<string>) => {
        useEffect(() => {
            if(contextValue === undefined && field.defaultValue) {
                onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, (field.defaultValue! as FieldValue).id);
            }
        },[]);

        return (
            <div className="RadioField-container">
                {field.values!.map(value => {
                    let isChecked = value.id === contextValue;
                    let onChange = () => onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, value.id);

                    return (
                        <label key={value.id}
                               className={`RadioField-value ${isChecked ? "checked" : ""} ${value.id}`}>
                            {value.label}
                            <input type="radio"
                                   name={field.id}
                                   onChange={onChange}
                                   value={value.id}
                                   checked={contextValue == value.id}
                                   className="RadioField-input"/>
                            <span className="RadioField-check"/>
                        </label>
                    )
                })}
            </div>
        );
    };