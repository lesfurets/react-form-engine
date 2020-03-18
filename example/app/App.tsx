import * as React from "react";
import {
    Form,
    Block,
    Field,
    ValuesField,
    NumericField,
    FieldEvents,
    FieldTypes,
    FieldValue,
    FormEngine,
    FormEvent,
    useFormDataManager
} from "../../src";

let VALUES = [
    {id: "value1", label: "Value 1"},
    {id: "value2", label: "Value 2"},
    {id: "value3", label: "Value 3"},
    {id: "value4", label: "Value 4"},
] as FieldValue[];


const FIELD_TEXT: Field = {
    id: "TEXT",
    type: FieldTypes.INPUT_TEXT,
    label: "Enter a text",
};
const FIELD_EMAIL: Field = {
    id: "EMAIL",
    type: FieldTypes.INPUT_EMAIL,
    label: "Email",
};
const FIELD_PASSWORD: Field = {
    id: "PASSWORD",
    type: FieldTypes.INPUT_PASSWORD,
    label: "Enter your password",
};
const FIELD_NUMBER: Field = {
    id: "NUMBER",
    type: FieldTypes.INPUT_INTEGER,
    label: "Enter a number",
};
const FIELD_AMOUNT: NumericField = {
    id: "AMOUNT",
    type: FieldTypes.INPUT_DECIMAL,
    label: "Enter an amount",
    symbol: "€"
};
const FIELD_TEXT_AREA: Field = {
    id: "TEXT_AREA",
    type: FieldTypes.INPUT_TEXT_AREA,
    label: "Enter a paragraph",
};
const FIELD_SELECT: ValuesField = {
    id: "SELECT",
    type: FieldTypes.INPUT_SELECT,
    label: "Make your choice",
    values: VALUES
};
const FIELD_RADIO: ValuesField = {
    id: "RADIO",
    type: FieldTypes.INPUT_RADIO,
    label: "Make your choice",
    values: VALUES
};
const FIELD_CHECKBOX: ValuesField = {
    id: "CHECKBOX",
    type: FieldTypes.INPUT_CHECKBOX,
    label: "Select a radio",
    values: VALUES
};
const FIELD_DATE: Field = {
    id: "DATE",
    type: FieldTypes.INPUT_DATE,
    label: "Enter a date"
};

const BLOCK_1 = {
    id: "BLOCK_1",
    label: "All Fields",
    fields: [
        FIELD_TEXT,
        FIELD_EMAIL,
        FIELD_PASSWORD,
        FIELD_NUMBER,
        FIELD_AMOUNT,
        FIELD_TEXT_AREA,
        FIELD_SELECT,
        FIELD_RADIO,
        FIELD_CHECKBOX,
        FIELD_DATE,
    ]
};

const BLOCK_2 = {
    id: "BLOCK_2",
    label: "Test",
    fields: [
        FIELD_TEXT,
    ]
};

const FormModel = {
    id: "EXAMPLE",
    blocks: [
        BLOCK_1, BLOCK_2
    ] as Block[]
} as Form;

export const App = () => {
    const {formData, setFieldValue} = useFormDataManager({});
    const onEvent = (event: FormEvent, element: Field, details: any) => {
        console.log(event, element, details);
        if (event === FieldEvents.SET_VALUE) {
            setFieldValue(element, details)
        }
    };
    return (<FormEngine form={FormModel}
                        formData={formData}
                        onEvent={onEvent}/>
    );
}
