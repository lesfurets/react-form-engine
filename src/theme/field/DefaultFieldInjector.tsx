import * as React from "react";
import {FieldType, FieldTypes} from "../../definition/FieldTypes";
import {TextField} from "./text/TextField";
import {EmailField} from "./email/EmailField";
import {PasswordField} from "./password/PasswordField";
import {IntegerField} from "./integer/IntegerField";
import {DecimalField} from "./decimal/DecimalField";
import {TextAreaField} from "./textarea/TextAreaField";
import {SelectField} from "./select/SelectField";
import {RadioField} from "./radio/RadioField";
import {CheckboxField} from "./checkbox/CheckboxField";
import {DateField} from "./date/DateField";

export class DefaultFieldInjector {
    static inject(type: FieldType) {
        switch (type) {
            case FieldTypes.INPUT_TEXT:
                return TextField;
            case FieldTypes.INPUT_EMAIL:
                return EmailField;
            case FieldTypes.INPUT_PASSWORD:
                return PasswordField;
            case FieldTypes.INPUT_INTEGER:
                return IntegerField;
            case FieldTypes.INPUT_DECIMAL:
                return DecimalField;
            case FieldTypes.INPUT_TEXT_AREA:
                return TextAreaField;
            case FieldTypes.INPUT_SELECT:
                return SelectField;
            case FieldTypes.INPUT_RADIO:
                return RadioField;
            case FieldTypes.INPUT_CHECKBOX:
                return CheckboxField;
            case FieldTypes.INPUT_DATE:
                return DateField;
            default:
                return UNKNOWN_FIELD;
        }
    };
}

export const UNKNOWN_FIELD = () => <div className="unknown-field"/>;