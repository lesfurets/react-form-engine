import * as React from "react";

import "../../styles/components/view/form-view.less"
import {ReactNode} from "react";
import {Form} from "../../definition/FormModel";

export interface FormViewProps {
    children?: ReactNode
    form: Form
}

export const FormView : React.SFC<FormViewProps> = (props : FormViewProps) => (
    <div className="FormView">
        {props.children}
    </div>
);