import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {ValueDetailEditor} from "./ValueDetailEditor";
import {FieldDetailEditor} from "./FieldDetailEditor";
import {FieldSelector} from "./FieldSelector";
import {fieldConnect} from "../../../../src/redux/fieldConnect";
import {ModelUtils} from "../../../../src/definition/ModelUtils";
import {FormEditor} from "../../editor/FormEditor";

let FIELD_ID = "fieldId";
let TYPE = "type";
let NOT = "not";
let DETAILS = "details";

let TARGET = {
    SELF: "self",
    OTHER: "other",
};

export const FieldPredicateTypes = {
    defined: "defined",
    equalToValue: "equalToValue",
    equalToField: "equalToField",
};

export class PredicateEditorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.updatePredicate = this.updatePredicate.bind(this);
    }

    updatePredicate(key, value) {
        let model = this.props.predicate;
        model[key] = value;
        if (key === "type") {
            model.details = TypeDetails[value].defaultDetails(this.props.fieldContext[FormEditor.MODEL]);
        }
        this.props.onChange(/*FieldPredicate2.load(model)*/);
    };

    render() {
        let {predicate, fieldContext} = this.props;
        let Details = TypeDetails[predicate.type].Component;
        let fieldList = ModelUtils.getFieldList(fieldContext[FormEditor.MODEL]);
        return (
            <span className="PredicateEditor">
                if&nbsp;
                <TextField select
                           value={predicate[FIELD_ID] === null ? TARGET.SELF : TARGET.OTHER}
                           onChange={(event) => this.updatePredicate(FIELD_ID, event.target.value === TARGET.SELF ? null : fieldList[0].id)}
                           margin="normal">
                    <MenuItem value={TARGET.SELF}>self</MenuItem>
                    <MenuItem value={TARGET.OTHER}>the field</MenuItem>
                </TextField>
                {predicate[FIELD_ID] === null ? null:
                        <FieldSelector field={predicate.fieldId}
                                       fieldList={fieldList}
                                       onChange={(fieldId) => this.updatePredicate(FIELD_ID, fieldId)}/>}
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
                                     fieldList={fieldList}
                                     onChange={(details) => this.updatePredicate(DETAILS, details)}/> : null}
            </span>
        );
    }
}

let TypeDetails = {
    [FieldPredicateTypes.defined]: {
        label: "defined",
        defaultDetails: () => undefined
    },
    [FieldPredicateTypes.equalToValue]:{
        label: "equal to",
        defaultDetails: () => ({value: ""}),
        Component: ValueDetailEditor
    },
    [FieldPredicateTypes.equalToField]:{
        label: "equal to field",
        defaultDetails: (model) => ({otherId: ModelUtils.getFieldList(model)[0].id}),
        Component: FieldDetailEditor
    },
};


PredicateEditorComponent.propTypes = {
    predicate: PropTypes.object,
    onChange: PropTypes.func
};

export const PredicateEditor = fieldConnect(PredicateEditorComponent);