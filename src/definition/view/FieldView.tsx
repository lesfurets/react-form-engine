import * as React from "react";
import {ReactNode} from "react";
import {Field} from "../model/Field";
import {FormEvent} from "../event/Event";

export interface FieldViewProps {
    field: Field
    fieldState: string
    errorMessage: string
    isVisible?: boolean
    onEvent?: (e: FormEvent, details: any) => void
    children?: ReactNode
}

export type FieldView = React.FunctionComponent<FieldViewProps>;