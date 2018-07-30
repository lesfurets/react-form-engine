import React from "react";
import {INPUT_MAIL, INPUT_TEXT, INPUT_PASSWORD} from "./field-type";
import {TextField} from "../component/fields/TextField";
import {EmailField} from "../component/fields/EmailField";
import {PasswordField} from "../component/fields/PasswordField";

export class FieldInjector {
    static inject (type) {
        switch (type) {
            case INPUT_TEXT:
                return TextField;
            case INPUT_MAIL:
                return EmailField;
            case INPUT_PASSWORD:
                return PasswordField;
            default:
                return UNKNOWN_FIELD;
        }
    };
}

export const UNKNOWN_FIELD = () => <div className="unknown-field"/>;