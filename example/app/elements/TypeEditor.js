import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {AllTypes} from "../../../src/definition/FieldTypes";

export class TypeEditor extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.props.onChange(AllTypes.find(type => type.id === event.target.value));
    }

    render() {
        let {type, className} = this.props;
        return (
            <TextField select
                       value={type.id}
                       label={"Field Type"}
                       className={className}
                       onChange={this.onChange}
                       margin="normal">
                {AllTypes.map(type => (<MenuItem key={type.id} value={type.id}>{type.label}</MenuItem>))}
            </TextField>
        );
    }
}

TypeEditor.propTypes = {
    type: PropTypes.object,
    className: PropTypes.string,
    onChange: PropTypes.func
};