export type FieldType = string;

export const FieldTypes: { [key: string]: FieldType } = {
    INPUT_TEXT: "TextField" as FieldType,
    INPUT_EMAIL: "EmailField" as FieldType,
    INPUT_PASSWORD: "PasswordField" as FieldType,
    INPUT_INTEGER: "IntegerField" as FieldType,
    INPUT_DECIMAL: "DecimalField" as FieldType,
};

export const AllTypes: FieldType[] = Object.keys(FieldTypes).map(key => FieldTypes[key]);