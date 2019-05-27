import * as React from "react";
import {InputField, InputFieldProps} from "./element/InputField";
import {FieldComponent} from "../../definition/component/FieldComponent";
import {FIELD_EVENT} from "../../definition/event/events";

const PLEASE_SELECT_UNDEFINED = "PLEASE_SELECT_UNDEFINED";

export const SelectField: FieldComponent<string> =
    (props: InputFieldProps<string>) => {
        let onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            let value = event.target.value;
            if (value === PLEASE_SELECT_UNDEFINED) {
                props.onFieldEvent!(FIELD_EVENT.RESET_VALUE)
            } else {
                props.onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, value.trim());
            }
        };
    return (
            <div className="SelectField-container">
                <select onChange={onChange} value={props.contextValue || PLEASE_SELECT_UNDEFINED}>
                    <option value={PLEASE_SELECT_UNDEFINED}> --- Please select --- </option>
                    {props.field.values!.map(value => <option value={value.id}>{value.label}</option>)}
                </select>
            </div>
        );
    }