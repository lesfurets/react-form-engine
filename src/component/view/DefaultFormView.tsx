import * as React from "react";

import "../../styles/components/view/form-view.less"
import {FormView, FormViewProps} from "../../definition/view/FormView";

export const DefaultFormView : FormView = (props : FormViewProps) => (
    <div className="FormView">
        {props.children}
    </div>
);