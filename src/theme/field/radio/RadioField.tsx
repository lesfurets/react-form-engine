import * as React from "react";
import {InputFieldProps} from "../common/element/InputField";
import {FieldComponent} from "../../../definition/theme/field/FieldComponent";
import {FIELD_EVENT} from "../../../definition/event/events";
import {useValues} from "../common/hook/useValues";

export const RadioField: FieldComponent<string> =
    ({contextValue, onFieldEvent, field}: InputFieldProps<string>) => {
        useValues(contextValue, field, onFieldEvent);

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