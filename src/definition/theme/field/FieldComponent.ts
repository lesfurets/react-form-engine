import * as React from "react";

import {FormEvent} from "../../event/Event";
import {Field} from "../../model/Field";

export interface FieldComponentProps<T, E extends Field> {
    tabIndex?: number,
    field: E,
    contextValue?: T,
    onFieldEvent?: (e: FormEvent, details?: T) => void,
}

export type FieldComponent<T, E extends Field> = React.FunctionComponent<FieldComponentProps<T, E>>