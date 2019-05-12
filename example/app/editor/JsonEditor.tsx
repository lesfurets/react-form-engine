import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from '@material-ui/core/IconButton';
import Send from '@material-ui/icons/Send';
import {Controlled as CodeMirror} from 'react-codemirror2'
import "codemirror/mode/javascript/javascript";

import "../../styles/json-editor.less";
import {Form} from "../../../src/definition/model/Form";

interface JsonEditorProps {
    form: Form,
    onChange: (form: Form) => void
}

interface JsonEditorState {
    model: string,
}


class JsonEditor extends React.Component<JsonEditorProps, JsonEditorState> {
    constructor(props: JsonEditorProps) {
        super(props);
        this.state = {
            model: JSON.stringify(props.form, null, 4)
        };
        this.onChange = this.onChange.bind(this);
        this.sendModel = this.sendModel.bind(this);
    }

    onChange(editor: any, data: any, value: string) {
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
                <CodeMirror
                    value={this.state.model}
                    className={"JsonEditor-mirror"}
                    options={{
                        mode: 'javascript',
                        theme: 'material',
                        lineNumbers: true
                    }}
                    onBeforeChange={this.onChange}
                />
            </Card>
        );
    }
}

export default JsonEditor;