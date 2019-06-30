import {Property} from "./Property";

export class FieldTypeDetail {
    label: string;
    properties: Property[];
    mandatory?: Property[];
}