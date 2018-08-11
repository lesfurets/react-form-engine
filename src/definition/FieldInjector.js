import React from "react";
import {FieldTypes} from "./FieldTypes";
import {TextField} from "../component/field/TextField";
import {EmailField} from "../component/field/EmailField";
import {PasswordField} from "../component/field/PasswordField";
import {NumberField} from "../component/field/NumberField";

export class FieldInjector {
    static inject (type) {
        switch (type) {
            case FieldTypes.INPUT_TEXT:
                return TextField;
            case FieldTypes.INPUT_EMAIL:
                return EmailField;
            case FieldTypes.INPUT_PASSWORD:
                return PasswordField;
            case FieldTypes.INPUT_NUMBER:
                return NumberField;
            default:
                return UNKNOWN_FIELD;
        }
    };
}

export const UNKNOWN_FIELD = () => <div className="unknown-field"/>;