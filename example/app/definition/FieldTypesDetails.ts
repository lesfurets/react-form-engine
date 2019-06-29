import {FieldType, FieldTypes} from "../../../src/definition/FieldTypes";
import {FieldTypeDetail} from "./FieldTypesDetail";
import {PLACEHOLDER, SYMBOL, VALUES} from "./FieldTypeProperties"

export const getFieldTypesDetails: (type: FieldType) => FieldTypeDetail = (type: FieldType) => {
    switch (type) {
        case FieldTypes.INPUT_TEXT:
            return {
                label: "Text",
                properties: [PLACEHOLDER]
            };
        case FieldTypes.INPUT_EMAIL:
            return {
                label: "Email",
                properties: [PLACEHOLDER]
            };
        case FieldTypes.INPUT_PASSWORD:
            return {
                label: "Password",
                properties: [PLACEHOLDER]
            };
        case FieldTypes.INPUT_INTEGER:
            return {
                label: "Integer",
                properties: [PLACEHOLDER, SYMBOL]
            };
        case FieldTypes.INPUT_DECIMAL:
            return {
                label: "Decimal",
                properties: [PLACEHOLDER, SYMBOL]
            };
        case FieldTypes.INPUT_RADIO:
            return {
                label: "Radio",
                properties: [VALUES]
            };
        case FieldTypes.INPUT_SELECT:
            return {
                label: "Select",
                properties: [VALUES]
            };
        case FieldTypes.INPUT_CHECKBOX:
            return {
                label: "Checkbox",
                properties: [VALUES]
            };
        case FieldTypes.INPUT_TEXT_AREA:
            return {
                label: "Text Area",
                properties: [PLACEHOLDER]
            };
        default:
            return {
                label: "Unsupported",
                properties:[],
            }
    }
};