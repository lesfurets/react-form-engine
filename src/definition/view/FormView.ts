import * as React from "react";
import {ReactNode} from "react";
import {Form} from "../model/Form";
import {FormEvent} from "../event/Event";

export interface FormViewProps {
    children?: ReactNode
    form: Form
    onEvent?: (e: FormEvent, details: any) => void
}

export type FormView = React.FunctionComponent<FormViewProps>;