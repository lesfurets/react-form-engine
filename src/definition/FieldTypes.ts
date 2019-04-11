export enum FieldTypes {
    INPUT_TEXT = "TextField",
    INPUT_EMAIL = "EmailField",
    INPUT_PASSWORD = "PasswordField",
    INPUT_NUMBER = "NumberField",
};

const properties = [
    {key: "placeholder", label:"Placeholder"}
];

export const FieldTypesDetails = {
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

export const AllTypes = Object.keys(FieldTypes).map(key => FieldTypes[key]);

