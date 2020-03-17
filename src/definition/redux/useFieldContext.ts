import {FormData} from "../../redux/FormData";
import {useContext} from "react";
import {FormDataContext} from "../../redux/FormDataContext";
import {FieldEvents} from "../event/events";
import {Field} from "../..";
import {useEventMulticaster} from "../event/service/useEventMulticaster";

export type ValueSetter = (id: Field, value: any) => void;

export const useFieldContext: () => [FormData, ValueSetter] = () => {
    const fieldContext = useContext(FormDataContext);
    const eventMulticaster = useEventMulticaster();

    return [fieldContext, (id: Field, value: any) => eventMulticaster.event(FieldEvents.SET_VALUE, id, value)];
};