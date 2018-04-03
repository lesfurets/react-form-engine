import React from "react";
import PropTypes from 'prop-types';
import {
    INPUT_TEXT,
    INPUT_MAIL
} from "../../definition/field-type";
import {fieldConnect} from "../../redux/fieldConnect";
import TextField from "../fields/TextField";
import FieldContainer from "../container/FieldContainer";

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
        let FieldContainer = this.props.container;
        console.log("OOOPS " + this.props.field.id);
        return (
            <FieldContainer field={this.props.field}>
                {injectField(this.props)}
            </FieldContainer>
        );
    }
}

FieldWrapper.propTypes = {
    field: PropTypes.object.isRequired,
    container: PropTypes.func,
};

FieldWrapper.defaultProps = {
    container: FieldContainer
};

export default fieldConnect(FieldWrapper);