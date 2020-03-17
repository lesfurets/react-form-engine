import {FormData} from "../../redux/FormData";
import {useContext} from "react";
import {FormDataContext} from "../../redux/FormDataContext";
import {EventContext} from "../event/EventContext";
import {FIELD_EVENT} from "../event/events";
import {Field} from "../..";

export type ValueSetter = (id: Field, value: any) => void;

export const useFieldContext: () => [FormData, ValueSetter] = () => {
    const fieldContext = useContext(FormDataContext);
    const eventMulticaster = useContext(EventContext)

    return [fieldContext, (id: Field, value: any) => eventMulticaster.event(FIELD_EVENT.SET_VALUE, id, value)];
};