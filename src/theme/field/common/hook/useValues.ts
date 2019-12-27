import {useEffect} from "react";
import {FIELD_EVENT} from "../../../../definition/event/events";
import {FieldValue} from "../../../../definition/model/Field";
import {FormEvent} from "../../../../definition/event/Event";
import {ValuesField} from "../../../../definition/model/fields/ValuesField";

export const useValues = (contextValue: string | undefined, field: ValuesField, onFieldEvent?: (e: FormEvent, details: string) => void) => {
    useEffect(() => {
        if(contextValue === undefined && field.defaultValue) {
            onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, (field.defaultValue! as FieldValue).id);
        }
    },[]);
}
