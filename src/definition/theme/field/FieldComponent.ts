import * as React from "react";

import {FormEvent} from "../../event/Event";
import {Field} from "../../model/Field";

export interface FieldComponentProps<T> {
    tabIndex?: number,
    field: Field,
    contextValue?: T,
    onFieldEvent?: (e: FormEvent, details?: T) => void,
}

export type FieldComponent<T> = React.FunctionComponent<FieldComponentProps<T>>