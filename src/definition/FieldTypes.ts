export type FieldType = string;

export const FieldTypes: { [key: string]: FieldType } = {
    INPUT_TEXT: "TextField" as FieldType,
    INPUT_TEXT_AREA: "TextAreaField" as FieldType,
    INPUT_EMAIL: "EmailField" as FieldType,
    INPUT_PASSWORD: "PasswordField" as FieldType,
    INPUT_INTEGER: "IntegerField" as FieldType,
    INPUT_DECIMAL: "DecimalField" as FieldType,
    INPUT_SELECT: "SelectField" as FieldType,
};

export const AllTypes: FieldType[] = Object.keys(FieldTypes).map(key => FieldTypes[key]);