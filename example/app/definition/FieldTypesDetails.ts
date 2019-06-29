import {FieldType, FieldTypes} from "../../../src/definition/FieldTypes";
import {FieldTypeDetail} from "./FieldTypesDetail";
import {PLACEHOLDER, SYMBOL, VALIDATION_RULE, VALUES, VISIBILITY_RULE} from "./FieldProperties"

const COMMON = [VISIBILITY_RULE, VALIDATION_RULE];

export const getFieldTypesDetails: (type: FieldType) => FieldTypeDetail = (type: FieldType) => {
    switch (type) {
        case FieldTypes.INPUT_TEXT:
            return {
                label: "Text",
                properties: [PLACEHOLDER,...COMMON]
            };
        case FieldTypes.INPUT_EMAIL:
            return {
                label: "Email",
                properties: [PLACEHOLDER,...COMMON]
            };
        case FieldTypes.INPUT_PASSWORD:
            return {
                label: "Password",
                properties: [PLACEHOLDER,...COMMON]
            };
        case FieldTypes.INPUT_INTEGER:
            return {
                label: "Integer",
                properties: [PLACEHOLDER, SYMBOL,...COMMON]
            };
        case FieldTypes.INPUT_DECIMAL:
            return {
                label: "Decimal",
                properties: [PLACEHOLDER, SYMBOL,...COMMON]
            };
        case FieldTypes.INPUT_RADIO:
            return {
                label: "Radio",
                properties: [VALUES,...COMMON]
            };
        case FieldTypes.INPUT_SELECT:
            return {
                label: "Select",
                properties: [VALUES,...COMMON]
            };
        case FieldTypes.INPUT_CHECKBOX:
            return {
                label: "Checkbox",
                properties: [VALUES,...COMMON]
            };
        case FieldTypes.INPUT_TEXT_AREA:
            return {
                label: "Text Area",
                properties: [PLACEHOLDER,...COMMON]
            };
        default:
            return {
                label: "Unsupported",
                properties:[],
            }
    }
};