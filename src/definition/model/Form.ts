import {Block} from "./Block";
import {FormElement} from "./FormElement";

export class Form implements FormElement {
    id: string;
    label?: string;
    blocks: Block[]
}