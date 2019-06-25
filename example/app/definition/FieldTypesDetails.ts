import {FieldType, FieldTypes} from "../../../src/definition/FieldTypes";

const properties = [
    {key: "placeholder", label: "Placeholder"}
];

interface FieldTypeProperty {
    key: string,
    label: string,
}

interface FieldTypeDetail {
    label: string,
    properties: FieldTypeProperty[]
}

export const getFieldTypesDetails = (type: FieldType) => {
    switch (type) {
        case FieldTypes.INPUT_TEXT:
            return {
                label: "Text",
                properties: properties
            };
        case FieldTypes.INPUT_EMAIL:
            return {
                label: "Email",
                properties: properties
            };
        case FieldTypes.INPUT_PASSWORD:
            return {
                label: "Password",
                properties: properties
            };
        case FieldTypes.INPUT_INTEGER:
            return {
                label: "Integer",
                properties: [
                    ...properties,
                    {key: "symbol", label: "Symbol"}
                ]
            };
        case FieldTypes.INPUT_DECIMAL:
            return {
                label: "Decimal",
                properties: [
                    ...properties,
                    {key: "symbol", label: "Symbol"}
                ]
            };
        case FieldTypes.INPUT_RADIO:
            return {
                label: "Radio",
                properties: [
                    ...properties,
                ]
            };
        case FieldTypes.INPUT_SELECT:
            return {
                label: "Select",
                properties: [
                    ...properties,
                ]
            };
        case FieldTypes.INPUT_CHECKBOX:
            return {
                label: "Checkbox",
                properties: [
                    ...properties,
                ]
            };
        case FieldTypes.INPUT_TEXT_AREA:
            return {
                label: "Text Area",
                properties: [
                    ...properties,
                ]
            };
        default:
            return {
                label: "Unsupported",
                properties:[],
            }
    }
}

export const FieldTypesDetails: {[type: string]: FieldTypeDetail} = {
    [FieldTypes.INPUT_TEXT.id]: {
        label: "Text",
        properties: properties
    },
    [FieldTypes.INPUT_EMAIL.id]: {
        label: "Email",
        properties: properties
    },
    [FieldTypes.INPUT_PASSWORD.id]: {
        label: "Password",
        properties: properties
    },
    [FieldTypes.INPUT_INTEGER.id]: {
        label: "Number",
        properties: [
            ...properties,
            {key: "symbol", label: "Symbol"}
        ]
    },
};