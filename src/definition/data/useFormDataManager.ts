import {FormData} from "./FormData";
import {useState} from "react";
import {ValueSetter} from "./useFormData";
import {Field} from "../model/Field";

export const useFormDataManager: (initialData: FormData) => [FormData, ValueSetter] =
    (initialData: FormData = {} as FormData) => {
        const [formData, setFormData] = useState<FormData>(initialData);
        return [formData, (field: Field, value: any) => setFormData({...formData, [field.id]: value})]
    };