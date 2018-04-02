import React from "react";
import PropTypes from 'prop-types';
import {
    INPUT_TEXT,
    INPUT_MAIL
} from "../definition/field-type";
import {fieldConnect} from "../redux/fieldConnect";
import TextField from "./fields/TextField";

let injectField = (props) => {
    switch (props.field.type) {
        case INPUT_TEXT:
        case INPUT_MAIL:
            return <TextField {...props}/>;
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

export default fieldConnect(FieldWrapper);