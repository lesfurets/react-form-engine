import {Form} from "../../../src/definition/model/Form";

export class Property {
    key: string;
    label?: string;
    getDefaultValue: (model: Form) => any;
    cleanAlso?:string;
}