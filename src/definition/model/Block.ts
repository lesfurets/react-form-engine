import {Field} from "./Field";
import {FormElement} from "./FormElement";

export class Block implements FormElement {
    id: string;
    label: string;
    ctaLabel?: string;
    fields: Field<any>[];
    [key: string]: any;
}

export enum BLOCK_STATE {
    TODO = "block-todo",
    DOING = "block-doing",
    DONE = "block-done"
}