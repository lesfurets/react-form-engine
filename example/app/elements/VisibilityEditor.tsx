import * as React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import {VisibilityRule} from "../../../src/dsl/visibility/VisibilityRule";
import {PredicateEditor} from "./predicate/PredicateEditor";
import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

import "../../styles/elements/visibility-editor.less";

interface VisibilityEditorProps {
    visibilityRule: VisibilityRule,
    onChange: (rule: VisibilityRule)=> void,
    onDelete: ()=>void
};

export const VisibilityEditor: React.FunctionComponent<VisibilityEditorProps> = ({visibilityRule, onChange, onDelete}) => (
    <div className="VisibilityEditor">
        <div className="VisibilityEditor-header">
            <div className="VisibilityEditor-label">Visibility rule:</div>
            <IconButton onClick={onDelete}>
                <Clear/>
            </IconButton>
        </div>
        <div className="VisibilityEditor-rule">
        This field&nbsp;
        <TextField select
                   value={visibilityRule.isVisible.toString()}
                   onChange={(event) => onChange(new VisibilityRule(event.target.value === 'true', visibilityRule.predicate))}
                   margin="normal">
            <MenuItem value={"true"}>is visible</MenuItem>
            <MenuItem value={"false"}>is not visible</MenuItem>
        </TextField>
        <PredicateEditor predicate={visibilityRule.predicate}
                         onChange={(predicate) => onChange(new VisibilityRule(visibilityRule.isVisible, predicate))}/>
        </div>
    </div>
);