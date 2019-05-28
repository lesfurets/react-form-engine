import * as React from "react";
import {InputField, InputFieldProps} from "./element/InputField";
import {FieldComponent} from "../../definition/component/FieldComponent";
import {FIELD_EVENT} from "../../definition/event/events";
import {useEffect} from "react";

const PLEASE_SELECT_UNDEFINED = "PLEASE_SELECT_UNDEFINED";

export const SelectField: FieldComponent<string> =
    (props: InputFieldProps<string>) => {
        useEffect(() => {
            if(props.contextValue === undefined && props.field.defaultValue) {
                props.onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, props.field.defaultValue!.id);
            }
        },[]);

        let onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            let value = event.target.value;
            if (value === PLEASE_SELECT_UNDEFINED) {
                props.onFieldEvent!(FIELD_EVENT.RESET_VALUE)
            } else {
                props.onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, value);
            }
        };
        return (
            <div className="SelectField-container">
                <select onChange={onChange} value={props.contextValue || PLEASE_SELECT_UNDEFINED}>
                    {props.field.defaultValue ? null :
                        <option value={PLEASE_SELECT_UNDEFINED}> --- Please select --- </option>}
                    {props.field.values!.map(value => <option key={value.id} value={value.id}>{value.label}</option>)}
                </select>
            </div>
        );
    };