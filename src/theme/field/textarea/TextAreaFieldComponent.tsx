import * as React from "react";
import {InputField, InputFieldProps} from "../common/element/InputField";
import {FieldComponent} from "../../../definition/theme/field/FieldComponent";
import {FieldComponentEvents, FieldEvents} from "../../../definition/event/events";
import {useTextField} from "../common/hook/useTextField";
import {TextField} from "../../../definition/model/fields/TextField";

export const TextAreaFieldComponent: FieldComponent<string, TextField> =
    ({field, tabIndex, contextValue, onFieldEvent}) => {
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
                          onBlur={() => onFieldEvent!(FieldComponentEvents.SUMBIT_VALUE, contextValue)}/>
            </div>
        );
    };