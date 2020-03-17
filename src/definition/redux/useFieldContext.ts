import {useDispatch, useSelector} from "react-redux";
import {FormData} from "../../redux/FormData";
import {setFieldValueAction} from "./actions";

export type ValueSetter = (id: string, value: any) => void;

export const useFieldContext: () => [FormData, ValueSetter] = () => {
    const fieldContext: FormData = useSelector((state:FormData) => state.fieldContext);
    const dispatch = useDispatch();

    const setFieldValue = (id: string, value: string) => dispatch(setFieldValueAction(id, value));

    return [fieldContext, setFieldValue];
};