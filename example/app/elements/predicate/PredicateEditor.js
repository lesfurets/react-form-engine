import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {FieldPredicateTypes, FieldPredicate} from "../../../../src/definition/predicate/FieldPredicate";
import {ValueDetailEditor} from "./ValueDetailEditor";
import {FieldDetailEditor} from "./FieldDetailEditor";

let FIELD_ID = "fieldId";
let TYPE = "type";
let NOT = "not";
let DETAILS = "details";

export class PredicateEditor extends React.Component {
    constructor(props) {
        super(props);
        this.updatePredicate = this.updatePredicate.bind(this);
    }

    updatePredicate(key, value) {
        let model = this.props.predicate;
        model[key] = value;
        if (key === "type") {
            model.details = TypeDetails[value].defaultDetails;
        }
        this.props.onChange(FieldPredicate.load(model));
    };

    render() {
        let {predicate} = this.props;
        let Details = TypeDetails[predicate.type].Component;
        return (
            <span className="PredicateEditor">
                if the field&nbsp;
                <TextField value={predicate.fieldId || ""}
                           onChange={(event) => this.updatePredicate(FIELD_ID, event.target.value)}
                           margin="normal"/>
                <TextField select
                           value={predicate.not.toString()}
                           onChange={(event) => this.updatePredicate(NOT, event.target.value === 'true')}
                           margin="normal">
                    <MenuItem value={"false"}>is</MenuItem>
                    <MenuItem value={"true"}>is not</MenuItem>
                </TextField>
                <TextField select
                           value={predicate.type}
                           onChange={(event) => this.updatePredicate(TYPE, event.target.value)}
                           margin="normal">
                    {Object.keys(FieldPredicateTypes)
                        .map(type => <MenuItem key={type} value={type}>{TypeDetails[type].label}</MenuItem>)}
                </TextField>
                {Details ? <Details  details={predicate.details}
                                       onChange={(details) => this.updatePredicate(DETAILS, details)}/> : null}
            </span>
        );
    }
}

let TypeDetails = {
    [FieldPredicateTypes.defined]: {label: "defined", defaultDetails: undefined},
    [FieldPredicateTypes.equalToValue]: {label: "equal to", defaultDetails: {value: ""}, Component: ValueDetailEditor},
    [FieldPredicateTypes.equalToField]: {label: "equal to field", defaultDetails: {otherId: ""}, Component: FieldDetailEditor},
};


PredicateEditor.propTypes = {
    predicate: PropTypes.object,
    onChange: PropTypes.func
};