import React from "react";
import "../styles/form-container.less"
import FieldWrapper from "./FieldWrapper";

export default class FormEngine extends React.Component {
    render() {
        return (
            <div className="form-container">
                {this.props.fields.map((field, index) => <FieldWrapper key={index} field={field}/>)}
            </div>
        );
    }
}
