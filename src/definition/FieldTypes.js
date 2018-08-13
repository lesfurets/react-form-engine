export const FieldTypes = {
    INPUT_TEXT: "TextField",
    INPUT_EMAIL: "EmailField",
    INPUT_PASSWORD: "PasswordField",
    INPUT_NUMBER: "NumberField",
};

export const FieldTypesDetails = {
    [FieldTypes.INPUT_TEXT]: {label:"Text"},
    [FieldTypes.INPUT_EMAIL]: {label:"Email"},
    [FieldTypes.INPUT_PASSWORD]: {label:"Password"},
    [FieldTypes.INPUT_NUMBER]: {label:"Number"},
};

export const AllTypes = Object.values(FieldTypes);

