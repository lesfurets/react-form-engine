import {Field} from "./Field";
import {FormElement} from "./FormElement";

export class Block implements FormElement {
    id: string;
    label: string;
    index?: number;
    ctaLabel?: string;
    fields: Field[];
    [key: string]: any;
}

export enum BLOCK_STATE {
    TODO = "block-todo",
    DOING = "block-doing",
    DONE = "block-done"
}