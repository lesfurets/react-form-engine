import {FieldTypes} from "./FieldTypes";
import {TextField} from "../component/field/TextField";
import {EmailField} from "../component/field/EmailField";
import {PasswordField} from "../component/field/PasswordField";
import {IntegerField} from "../component/field/IntegerField";
import * as React from "react";

export class FieldInjector {
    static inject(type: string) {
        switch (type) {
            case FieldTypes.INPUT_TEXT:
                return TextField;
            case FieldTypes.INPUT_EMAIL:
                return EmailField;
            case FieldTypes.INPUT_PASSWORD:
                return PasswordField;
            case FieldTypes.INPUT_NUMBER:
                return IntegerField;
            default:
                return UNKNOWN_FIELD;
        }
    };
}

export const UNKNOWN_FIELD = () => <div className="unknown-field"/>;