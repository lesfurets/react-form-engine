import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

export class LabelEditor extends React.Component {
    constructor() {
        super();
        this.state = {focus:false}
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onClick(){
        this.setState({focus: true})
    }

    onChange(event){
        this.props.onChange(event.target.value);
    }

    onBlur() {
        this.setState({focus: false});
    }

    render() {
        let {label, className} = this.props;
        let {focus} = this.state;
        return focus ?
            <TextField
                id="name"
                value={label}
                className={`LabelEditor ${className}`}
                onChange={this.onChange}
                onBlur={this.onBlur}
                margin="normal"
                autoFocus/> :
            <span className={className} onClick={this.onClick}>{label}</span>;
    }
}

LabelEditor.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
};