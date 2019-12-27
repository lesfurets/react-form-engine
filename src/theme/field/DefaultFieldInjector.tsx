import * as React from "react";
import {FieldType, FieldTypes} from "../../definition/FieldTypes";
import {TextFieldComponent} from "./text/TextFieldComponent";
import {EmailFieldComponent} from "./email/EmailFieldComponent";
import {PasswordFieldComponent} from "./password/PasswordFieldComponent";
import {IntegerFieldComponent} from "./integer/IntegerFieldComponent";
import {DecimalFieldComponent} from "./decimal/DecimalFieldComponent";
import {TextAreaFieldComponent} from "./textarea/TextAreaFieldComponent";
import {SelectFieldComponent} from "./select/SelectFieldComponent";
import {RadioFieldComponent} from "./radio/RadioFieldComponent";
import {CheckboxFieldComponent} from "./checkbox/CheckboxFieldComponent";
import {DateFieldComponent} from "./date/DateFieldComponent";

export class DefaultFieldInjector {
    static inject(type: FieldType) {
        switch (type) {
            case FieldTypes.INPUT_TEXT:
                return TextFieldComponent;
            case FieldTypes.INPUT_EMAIL:
                return EmailFieldComponent;
            case FieldTypes.INPUT_PASSWORD:
                return PasswordFieldComponent;
            case FieldTypes.INPUT_INTEGER:
                return IntegerFieldComponent;
            case FieldTypes.INPUT_DECIMAL:
                return DecimalFieldComponent;
            case FieldTypes.INPUT_TEXT_AREA:
                return TextAreaFieldComponent;
            case FieldTypes.INPUT_SELECT:
                return SelectFieldComponent;
            case FieldTypes.INPUT_RADIO:
                return RadioFieldComponent;
            case FieldTypes.INPUT_CHECKBOX:
                return CheckboxFieldComponent;
            case FieldTypes.INPUT_DATE:
                return DateFieldComponent;
            default:
                return UNKNOWN_FIELD;
        }
    };
}

export const UNKNOWN_FIELD = () => <div className="unknown-field"/>;