import * as React from "react";
import TextField from "@material-ui/core/TextField";



interface LabelEditorProps {
    label: string,
    className: string,
    onChange: (value: string) => void
};

interface LabelEditorState {
    focus: boolean,
};

export class LabelEditor extends React.Component<LabelEditorProps,LabelEditorState> {
    constructor(props: LabelEditorProps) {
        super(props);
        this.state = {focus:false}
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onClick(){
        this.setState({focus: true})
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>){
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
                value={label}
                className={`LabelEditor ${className}`}
                onChange={this.onChange}
                onBlur={this.onBlur}
                margin="normal"
                autoFocus/> :
            <span className={className} onClick={this.onClick}>{label}</span>;
    }
}