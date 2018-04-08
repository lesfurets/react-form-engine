import React from "react";
import {INPUT_MAIL, INPUT_TEXT} from "./field-type";
import TextField from "../component/fields/TextField"

export const injectField = (type) => {
    switch (type) {
        case INPUT_TEXT:
        case INPUT_MAIL:
            return TextField;
        default:
            return UNKNOWN_FIELD;
    }
};

export const UNKNOWN_FIELD = () => <div className="unknown-field"/>