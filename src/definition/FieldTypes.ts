// export type FieldType = string;

export class FieldType {
    id:string;

    constructor(id: string) {
        this.id = id;
    }
}

export const FieldTypes = {
    INPUT_TEXT: new FieldType("TextField"),
    INPUT_TEXT_AREA: new FieldType("TextAreaField"),
    INPUT_EMAIL: new FieldType("EmailField"),
    INPUT_PASSWORD: new FieldType("PasswordField"),
    INPUT_INTEGER: new FieldType("IntegerField"),
    INPUT_DECIMAL: new FieldType("DecimalField"),
    INPUT_SELECT: new FieldType("SelectField"),
    INPUT_RADIO: new FieldType("RadioField"),
    INPUT_CHECKBOX: new FieldType("CheckboxField"),
};

export const AllTypes: FieldType[] = Object.values(FieldTypes);