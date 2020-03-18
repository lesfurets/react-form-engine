import * as React from "react";
import {ReactNode} from "react";
import {Field} from "../../model/Field";
import {FormEvent} from "../../event/Event";

export interface FieldViewProps {
    index: number
    fieldState: string
    errorMessage: string
    isVisible?: boolean
    onEvent?: (e: FormEvent, details?: any) => void
}

export type FieldView = React.FunctionComponent<FieldViewProps>;