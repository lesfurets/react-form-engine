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

export const FieldTypesDetails: {[type: string]: FieldTypeDetail} = {
    [FieldTypes.INPUT_TEXT]: {
        label: "Text",
        properties: properties
    },
    [FieldTypes.INPUT_EMAIL]: {
        label: "Email",
        properties: properties
    },
    [FieldTypes.INPUT_PASSWORD]: {
        label: "Password",
        properties: properties
    },
    [FieldTypes.INPUT_NUMBER]: {
        label: "Number",
        properties: [
            ...properties,
            {key: "symbol", label: "Symbol"}
        ]
    },
};