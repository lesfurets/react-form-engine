import * as React from "react";
import {useEffect} from "react";
import {FieldComponent} from "../../../definition/theme/field/FieldComponent";
import {FIELD_EVENT} from "../../../definition/event/events";
import {FieldValue} from "../../../definition/model/Field";
import {ValuesField} from "../../../definition/model/fields/ValuesField";

const toggle = (contextValue: string[] | undefined, newValue: string) => {
    let currentValues = contextValue || [];
    return currentValues.includes(newValue) ?
        currentValues.filter(value => value !== newValue) : [...currentValues, newValue];
};

export const CheckboxFieldComponent: FieldComponent<string[], ValuesField> =
    ({contextValue, onFieldEvent, field}) => {
        useEffect(() => {
            if(contextValue === undefined && field.defaultValue) {
                onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, (field.defaultValue as FieldValue[]).map(value => value.id));
            }
        },[]);

        return (
            <div className="CheckboxField-container">
                {field.values!.map(value => {
                    let isChecked = (contextValue || []).includes(value.id);
                    let onChange = () => {
                        let values:string[] = toggle(contextValue, value.id);
                        if(values.length === 0){
                            onFieldEvent!(FIELD_EVENT.RESET_VALUE);
                        } else {
                            onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, values);
                        }
                    };

                    return (
                        <label key={value.id}
                               className={`CheckboxField-value ${isChecked ? "checked" : ""} ${value.id}`}>
                            {value.label}
                            <input type="checkbox"
                                   name={field.id}
                                   onChange={onChange}
                                   value={value.id}
                                   checked={isChecked}
                                   className="CheckboxField-input"/>
                            <span className="CheckboxField-check"/>
                        </label>
                    )
                })}
            </div>
        );
    };