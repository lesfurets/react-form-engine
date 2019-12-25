import * as React from "react";
import ResponsiveContainer from "react-responsive-widget";

import {FormView, FormViewProps} from "../../definition/theme/view/FormView";

import "./DefaultFormView.scss"

export const DefaultFormView : FormView = (props : FormViewProps) => (
    <div className="DefaultFormView">
        <ResponsiveContainer sm={700} md={992} lg={1200}>
            {props.children}
        </ResponsiveContainer>
    </div>
);