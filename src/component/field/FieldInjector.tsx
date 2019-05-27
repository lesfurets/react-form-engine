import {FieldTypes} from "../../definition/FieldTypes";
import {TextField} from "./TextField";
import {EmailField} from "./EmailField";
import {PasswordField} from "./PasswordField";
import {IntegerField} from "./IntegerField";
import * as React from "react";
import {DecimalField} from "./DecimalField";
import {TextAreaField} from "./TextAreaField";
import {SelectField} from "./SelectField";

export class FieldInjector {
    static inject(type: string) {
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
            default:
                return UNKNOWN_FIELD;
        }
    };
}

export const UNKNOWN_FIELD = () => <div className="unknown-field"/>;