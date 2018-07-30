import React from "react";
import PropTypes from 'prop-types';

export class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.inpuType = "text";
        this.state = {
            value: props.contextValue || "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    onBlur() {
        this.props.setFieldValue(this.props.field.id, this.state.value.trim());
    }

    render() {
        let {field, tabIndex} = this.props;
        return (
            <div className="TextField-container">
                <input type={this.inpuType}
                       placeholder={field.placeholder || ""}
                       name={field.id}
                       id={field.id}
                       tabIndex={tabIndex}
                       value={this.state.value}
                       onChange={this.handleChange}
                       onBlur={this.onBlur}/>
            </div>
        );
    }
}

TextField.propTypes = {
    contextValue: PropTypes.string,
    tabIndex: PropTypes.number,
    setFieldValue: PropTypes.func,
    field: PropTypes.shape({
        id: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        style: PropTypes.string,
    }).isRequired
};

TextField.defaultProps = {
    tabIndex: 0
};
