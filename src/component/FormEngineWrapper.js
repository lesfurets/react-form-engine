import React from "react";
import "../styles/form-wrapper.less"
import FormContainer from "./FormEngine";

export default class FormEngineWrapper extends React.Component {
    render() {
        return (
            <div className="form-wrapper">
                <FormContainer {...this.props}/>
            </div>
        );
    }
}
