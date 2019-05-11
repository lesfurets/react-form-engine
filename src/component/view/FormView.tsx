import * as React from "react";

import "../../styles/components/view/form-view.less"
import {ReactNode} from "react";
import {FormEvent} from "../../definition/event/Event";
import {Form} from "../../definition/model/Form";

export interface FormViewProps {
    children?: ReactNode
    form: Form
    onEvent?: (e: FormEvent, details: any) => void
}

export const FormView : React.SFC<FormViewProps> = (props : FormViewProps) => (
    <div className="FormView">
        {props.children}
    </div>
);