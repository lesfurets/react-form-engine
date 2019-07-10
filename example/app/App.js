import React from "react";
import FormEngine from "../../src/index";
import {FieldTypes} from "../../src/definition/FieldTypes";

let VALUES = [
    {id: "value1", label: "Value 1"},
    {id: "value2", label: "Value 2"},
    {id: "value3", label: "Value 3"},
    {id: "value4", label: "Value 4"},
];

const FORM = {
    id: "EXAMPLE",
    blocks: [
        {
            id: "ALL_FIELDS",
            label: "All Fields",
            fields: [
                {
                    id: "TEXT",
                    type: FieldTypes.INPUT_TEXT,
                    label: "Enter a text"
                },
                {
                    id: "EMAIL",
                    type: FieldTypes.INPUT_EMAIL,
                    label: "Email",
                },
                {
                    id: "PASSWORD",
                    type: FieldTypes.INPUT_PASSWORD,
                    label: "Enter your password",
                },
                {
                    id: "NUMBER",
                    type: FieldTypes.INPUT_INTEGER,
                    label: "Enter a number",
                },
                {
                    id: "AMOUNT",
                    type: FieldTypes.INPUT_DECIMAL,
                    label: "Enter an amount",
                    symbol: "€"
                },
                {
                    id: "TEXT_AREA",
                    type: FieldTypes.INPUT_TEXT_AREA,
                    label: "Enter a paragraph",
                },
                {
                    id: "SELECT",
                    type: FieldTypes.INPUT_SELECT,
                    label: "Make your choice",
                    values: VALUES
                },
                {
                    id: "RADIO",
                    type: FieldTypes.INPUT_RADIO,
                    label: "Make your choice",
                    values: VALUES
                },
                {
                    id: "CHECKBOX",
                    type: FieldTypes.INPUT_CHECKBOX,
                    label: "Select a radio",
                    values: VALUES
                }
            ]
        }
    ]
};

export const App = () => (
    <FormEngine form={FORM}
                onEvent={(event, element, details) => console.log(event, element, details)}/>
);