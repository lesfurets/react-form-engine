import * as React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {ReversedPredicate} from "../../../../../src/dsl/predicate/data/operation/ReversedPredicate";
import {PredicateEditorComponentProps} from "../PredicateEditor";
import {ValuePredicateEditor} from "../value/ValuePredicateEditor";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";

const appendChild = (parentPredicate: Predicate, childPredicate: Predicate) =>
    parentPredicate instanceof ReversedPredicate ? new ReversedPredicate(childPredicate) : childPredicate;

export const ReversedPredicateEditor: React.FunctionComponent<PredicateEditorComponentProps> = ({predicate, onChange}) => {
    const getPredicate = () => predicate instanceof ReversedPredicate ? predicate.child : predicate;
    return (
        <>
            <TextField select
                       value={(predicate instanceof ReversedPredicate).toString()}
                       onChange={(event) => onChange(event.target.value === 'true' ?
                           new ReversedPredicate(getPredicate()) : getPredicate())}
                       margin="normal">
                <MenuItem value={"false"}>is</MenuItem>
                <MenuItem value={"true"}>is not</MenuItem>
            </TextField>
            <ValuePredicateEditor predicate={predicate instanceof ReversedPredicate ? predicate.child : predicate}
                                  onChange={(childPredicate) => onChange(appendChild(predicate, childPredicate))}/>
        </>
    );
};