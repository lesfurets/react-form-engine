import {FieldType} from "../FieldTypes";
import {FieldComponent} from "./FieldComponent";

export type FieldInjector = (type: FieldType) => FieldComponent<any>