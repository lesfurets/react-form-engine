import React from "react";
import {FieldTypes} from "./FieldTypes";
import {TextField} from "../component/fields/TextField";
import {EmailField} from "../component/fields/EmailField";
import {PasswordField} from "../component/fields/PasswordField";
import {NumberField} from "../component/fields/NumberField";

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