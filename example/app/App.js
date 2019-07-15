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
                    id: "DATE",
                    type: FieldTypes.INPUT_DATE,
                    label: "Enter a date"
                },
            ]
        }
    ]
};

export const App = () => (
    <FormEngine form={FORM}
                onEvent={(event, element, details) => console.log(event, element, details)}/>
);