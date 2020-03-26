import {FormData} from "../FormData";
import {Field} from "../../model/Field";

export type ValueSetter = <T extends any>(id: Field<T>, value: T) => void;

export type FormDataManager = {
    formData: FormData,
    setFieldValue: ValueSetter,
};