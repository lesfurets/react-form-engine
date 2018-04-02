import React from "react";
import PropTypes from 'prop-types';
import {INPUT_MAIL} from "../../definition/field-type"

export default class TextField extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        this.setState({value: value});
    }

    onBlur() {
    }

    render() {
        return (
            <div className="text-field">
                <input type={this.props.field.type == INPUT_MAIL ? "email": "text"}
                       placeholder={typeof placeholder !== 'undefined' ? placeholder : ""}
                       maxLength="38"
                       name={this.props.field.id}
                       id={this.props.field.id}
                       tabIndex={this.props.tabIndex}
                       value={this.state.value}
                       onChange={this.handleChange}
                       onBlur={this.onBlur}/>
            </div>
        );
    }
}

TextField.propTypes = {
    tabIndex: PropTypes.number,
    field: PropTypes.shape({
        id: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        style: PropTypes.string,
    }).isRequired
};

TextField.defaultProps = {
    tabIndex: 0
};
