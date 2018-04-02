import React from "react";
import PropTypes from 'prop-types';
import {
    INPUT_TEXT,
} from "../definition/field-type";
import TextField from "./fields/TextField";

let injectField = (props) => {
    switch (props.field.type) {
        case INPUT_TEXT:
            return <TextField/>;
        default:
            return <div className="unknown-field"/>;
    }
};

class FieldWrapper extends React.Component {
    render() {
        return injectField(this.props);
    }
}

FieldWrapper.propTypes = {
    field: PropTypes.object.isRequired,
};

export default FieldWrapper;