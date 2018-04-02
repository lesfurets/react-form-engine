import React from "react";

const FieldContainer = props => (
    <div className="field-container">
        <div className="field-label">{props.field.label}</div>
        {props.children}
    </div>
);

export default FieldContainer;

