import * as React from "react";
import {InputFieldProps} from "../common/element/InputField";
import {FieldComponent} from "../../../definition/theme/field/FieldComponent";
import {FIELD_EVENT} from "../../../definition/event/events";
import {useValues} from "../common/hook/useValues";
import {ValuesField} from "../../../definition/model/fields/ValuesField";

export const PLEASE_SELECT_UNDEFINED = "PLEASE_SELECT_UNDEFINED";

export const SelectFieldComponent: FieldComponent<string, ValuesField> =
    ({contextValue, onFieldEvent, field}) => {
        useValues(contextValue, field, onFieldEvent);

        let onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            let value = event.target.value;
            if (value === PLEASE_SELECT_UNDEFINED) {
                onFieldEvent!(FIELD_EVENT.RESET_VALUE)
            } else {
                onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, value);
            }
        };

        return (
            <div className="SelectField-container">
                <select onChange={onChange} value={contextValue || PLEASE_SELECT_UNDEFINED}>
                    {field.defaultValue ? null :
                        <option value={PLEASE_SELECT_UNDEFINED}> --- Please select --- </option>}
                    {field.values!.map(value => <option key={value.id} value={value.id}>{value.label}</option>)}
                </select>
            </div>
        );
    };