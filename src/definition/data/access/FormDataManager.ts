import {FormData} from "../FormData";
import {Field} from "../../model/Field";

export type ValueSetter = (id: Field, value: any) => void;

export type FormDataManager = {
    formData: FormData,
    setFieldValue: ValueSetter,
};