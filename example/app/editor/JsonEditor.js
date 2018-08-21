import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from '@material-ui/core/IconButton';
import Send from '@material-ui/icons/Send';
import {Controlled as CodeMirror} from 'react-codemirror2'
import "codemirror/mode/javascript/javascript";

import "../../styles/json-editor.less";

class JsonEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: JSON.stringify(props.model, null, 4)
        };
        this.onChange = this.onChange.bind(this);
        this.sendModel = this.sendModel.bind(this);
    }

    onChange(editor, data, value) {
        this.setState({model: value});
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
                {/*<CodeMirror value={this.state.model} onChange={this.onChange} options={{*/}
                    {/*lineNumbers: true,*/}
                    {/*mode: 'javascript'*/}
                {/*}} />*/}
                <CodeMirror
                    value={this.state.model}
                    className={"JsonEditor-mirror"}
                    options={{
                        mode: 'xml',
                        theme: 'material',
                        lineNumbers: true
                    }}
                    onBeforeChange={this.onChange}
                />
            </Card>
        );
    }
}

JsonEditor.propTypes = {
    model: PropTypes.array.isRequired
};

export default JsonEditor;