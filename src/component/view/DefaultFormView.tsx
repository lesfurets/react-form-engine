import * as React from "react";

import "../../styles/components/view/form-view.less"
import {FormView, FormViewProps} from "../../definition/view/FormView";
import ResponsiveContainer from "react-responsive-widget";

export const DefaultFormView : FormView = (props : FormViewProps) => (
    <div className="DefaultFormView">
        <ResponsiveContainer lg={1200} md={992} sm={700}>
            {props.children}
        </ResponsiveContainer>
    </div>
);