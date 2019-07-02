import {Block} from "../../../src/definition/model/Block";
import {Field} from "../../../src/definition/model/Field";
import {FieldTypes} from "../../../src/definition/FieldTypes";

const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateHash = () => {
    return Array
        .apply(null, {length: 10})
        .map(Function.call, Math.random)
        .map((rand: number) => values.charAt(Math.floor(rand * values.length)))
        .reduce((acc: number, value: number) => acc + value, "");
}

export const generateNewBlock: () => Block = () => ({
    id: generateHash(),
    label: "Enter block name",
    fields: []
});

export const generateNewField: () => Field = () => ({
    id: generateHash(),
    label: "Enter field name",
    type: FieldTypes.INPUT_TEXT
});