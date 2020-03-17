import {useEffect} from "react";
import {FieldComponentEvents, FieldEvents} from "../../../../definition/event/events";
import {FieldValue} from "../../../../definition/model/Field";
import {FormEvent} from "../../../../definition/event/Event";
import {ValuesField} from "../../../../definition/model/fields/ValuesField";

export const useValues = (contextValue: string | undefined, field: ValuesField, onFieldEvent?: (e: FormEvent, details: string) => void) => {
    useEffect(() => {
        if(contextValue === undefined && field.defaultValue) {
            onFieldEvent!(FieldComponentEvents.SUMBIT_VALUE, (field.defaultValue! as FieldValue).id);
        }
    },[]);
}
