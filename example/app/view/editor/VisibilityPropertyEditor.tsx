import * as React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

import "../../../styles/view/editor/visibility-property-editor.less";
import {VisibilityRule} from "../../../../src/dsl/visibility/VisibilityRule";
import {PredicateEditor} from "./common/predicate/PredicateEditor";
import {PropertyEditor} from "../../definition/component/PropertyEditor";

export const VisibilityPropertyEditor: PropertyEditor<VisibilityRule> = ({value, onChange, onDelete}) => (
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
                   value={value.isVisible.toString()}
                   onChange={(event) => onChange(new VisibilityRule(event.target.value === 'true', value.predicate))}
                   margin="normal">
            <MenuItem value={"true"}>is visible</MenuItem>
            <MenuItem value={"false"}>is not visible</MenuItem>
        </TextField>
        <PredicateEditor predicate={value.predicate}
                         onChange={(predicate) => onChange(new VisibilityRule(value.isVisible, predicate))}/>
        </div>
    </div>
);