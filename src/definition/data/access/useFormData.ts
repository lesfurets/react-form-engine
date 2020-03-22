import {FormData} from "../FormData";
import {useContext} from "react";
import {FormDataContext} from "./FormDataContext";
import {FieldEvents} from "../../event/events";
import {Field} from "../../../index";
import {useEventMulticaster} from "../../event/service/access/useEventMulticaster";

export type ValueSetter = (id: Field, value: any) => void;

export const useFormData: () => [FormData, ValueSetter] = () => {
    const fieldContext = useContext(FormDataContext);
    const eventMulticaster = useEventMulticaster();

    return [fieldContext, (id: Field, value: any) => eventMulticaster.event(FieldEvents.SET_VALUE, id, value)];
};