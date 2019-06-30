import {Property} from "./Property";

export class TypeDetails {
    label: string;
    properties: Property[];
    mandatory?: Property[];
}