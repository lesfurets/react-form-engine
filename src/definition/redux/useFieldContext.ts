import {useDispatch, useSelector} from "react-redux";
import {FieldContext} from "../../redux/FieldContext";
import {setFieldValueAction} from "./actions";

export type ValueSetter = (id: string, value: any) => void;

export const useFieldContext: () => [FieldContext, ValueSetter] = () => {
    const fieldContext: FieldContext = useSelector((state:FieldContext) => state.fieldContext);
    const dispatch = useDispatch();

    const setFieldValue = (id: string, value: string) => dispatch(setFieldValueAction(id, value));

    return [fieldContext, setFieldValue];
};