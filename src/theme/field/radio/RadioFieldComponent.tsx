import * as React from "react";
import {InputFieldProps} from "../common/element/InputField";
import {FieldComponent} from "../../../definition/theme/field/FieldComponent";
import {FieldComponentEvents, FieldEvents} from "../../../definition/event/events";
import {useValues} from "../common/hook/useValues";
import {ValuesField} from "../../../definition/model/fields/ValuesField";

export const RadioFieldComponent: FieldComponent<string, ValuesField> =
    ({contextValue, onFieldEvent, field}) => {
        useValues(contextValue, field, onFieldEvent);

        return (
            <div className="RadioField-container">
                {field.values!.map(value => {
                    let isChecked = value.id === contextValue;
                    let onChange = () => onFieldEvent!(FieldComponentEvents.SUMBIT_VALUE, value.id);

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