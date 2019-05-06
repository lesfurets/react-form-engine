import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

export class PropertyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.props.onChange(event.target.value);
    }

    render() {
        let {label, value, className} = this.props;
        return <TextField label={label}
                          value={value || ""}
                          className={`PropertyEditor ${className}`}
                          onChange={this.onChange}
                          margin="normal"/>;
    }
}

PropertyEditor.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
};