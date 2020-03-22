import {FormData} from "../FormData";
import {useState} from "react";
import {Field} from "../../model/Field";
import {FormDataManager} from "./FormDataManager";

export const useFormDataManager: (initialData: FormData) => FormDataManager =
    (initialData: FormData = {} as FormData) => {
        const [formData, setFormData] = useState<FormData>(initialData);
        return {formData, setFieldValue: (field: Field, value: any) => setFormData({...formData, [field.id]: value})}
    };