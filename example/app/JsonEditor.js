import React from "react";
import PropTypes from "prop-types";
import "../styles/app.less";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import Send from '@material-ui/icons/Send';

import "../styles/json-editor.less";

class JsonEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: JSON.stringify(props.model, null, 4)
        };
        this.onChange = this.onChange.bind(this);
        this.sendModel = this.sendModel.bind(this);
    }

    onChange(event) {
        this.setState({model: event.target.value});
    }

    sendModel() {
        this.props.onChange(JSON.parse(this.state.model));
    }

    render() {
        return (
            <Card raised className="JsonEditor">
                <CardHeader title="Json model"
                            action={
                                <IconButton onClick={this.sendModel}>
                                    <Send color="primary"/>
                                </IconButton>
                            }/>
                <CardContent className={"JsonEditor-container"}>
                    <TextField
                        id="multiline-flexible"
                        label="You can edit your model here"
                        multiline
                        rowsMax="20"
                        value={this.state.model}
                        onChange={this.onChange}
                        className={"JsonEditor-input"}
                        margin="normal"
                    />
                </CardContent>
            </Card>
        );
    }
}

JsonEditor.propTypes = {
    model: PropTypes.array.isRequired
};

export default JsonEditor;