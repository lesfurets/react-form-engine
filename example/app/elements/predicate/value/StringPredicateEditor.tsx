import * as React from "react";
import {PredicateEditorComponentProps} from "../PredicateEditor";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";
import {ValueDefinedPredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValueDefinedPredicate";
import {ValueEqualToFieldPredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValueEqualToFieldPredicate";
import {StringPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringPredicate";
import {ValuePredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValuePredicate";
import {FieldSelector} from "../../FieldSelector";
import {ModelUtils} from "../../../../../src/definition/ModelUtils";
import {FormEditor} from "../../../editor/FormEditor";
import {StringEmptyPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEmptyPredicate";
import {StringEqualToPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEqualToPredicate";
import {StringContainPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringContainPredicate";
import {StringStartWithPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringStartWithPredicate";
import {StringEndWithPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEndWithPredicate";
import {StringRegExpPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringRegExpPredicate";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {ValueDetailEditor} from "../../ValueDetailEditor";

let STRING_TEST = {
    EMPTY: "empty",
    EQUAL_TO: "equalTo",
    CONTAINING: "containing",
    STARTING_WITH: "startingWith",
    ENDING_WITH: "endingWith",
    MATCHING: "matching",
};

const getType = (predicate: Predicate) => {
    if (predicate instanceof StringEmptyPredicate) {
        return STRING_TEST.EMPTY;
    }
    if (predicate instanceof StringEqualToPredicate) {
        return STRING_TEST.EQUAL_TO;
    }
    if (predicate instanceof StringContainPredicate) {
        return STRING_TEST.CONTAINING;
    }
    if (predicate instanceof StringStartWithPredicate) {
        return STRING_TEST.STARTING_WITH;
    }
    if (predicate instanceof StringEndWithPredicate) {
        return STRING_TEST.ENDING_WITH;
    }
    if (predicate instanceof StringRegExpPredicate) {
        return STRING_TEST.MATCHING;
    }
    return ""
};

const getDetailsEditor = (currentPredicate: Predicate, onChange: (predicate: StringPredicate) => void) => {
    if (currentPredicate instanceof StringEqualToPredicate) {
        return <ValueDetailEditor details={currentPredicate.value} onChange={details => onChange(new StringEqualToPredicate(details))}/>;
    }
    if (currentPredicate instanceof StringContainPredicate) {
        return <ValueDetailEditor details={currentPredicate.value} onChange={details => onChange(new StringContainPredicate(details))}/>;
    }
    if (currentPredicate instanceof StringStartWithPredicate) {
        return <ValueDetailEditor details={currentPredicate.value} onChange={details => onChange(new StringStartWithPredicate(details))}/>;
    }
    if (currentPredicate instanceof StringEndWithPredicate) {
        return <ValueDetailEditor details={currentPredicate.value} onChange={details => onChange(new StringEndWithPredicate(details))}/>;
    }
    if (currentPredicate instanceof StringRegExpPredicate) {
        return <ValueDetailEditor details={currentPredicate.regExp.source} onChange={details => onChange(new StringRegExpPredicate(new RegExp(details)))}/>;
    }
    return null;
};

const getPredicate = (code: string) => {
    switch (code) {
        case STRING_TEST.EMPTY:
            return new StringEmptyPredicate();
        case STRING_TEST.EQUAL_TO:
            return new StringEqualToPredicate("");
        case STRING_TEST.CONTAINING:
            return new StringContainPredicate("");
        case STRING_TEST.STARTING_WITH:
            return new StringStartWithPredicate("");
        case STRING_TEST.ENDING_WITH:
            return new StringEndWithPredicate("");
        case STRING_TEST.MATCHING:
            return new StringRegExpPredicate(/.*/);
    }
    return new StringEmptyPredicate();
};


interface StringPredicateEditorProps {
    predicate: Predicate,
    onChange: (predicate: StringPredicate) => void
}

export const StringPredicateEditor: React.FunctionComponent<StringPredicateEditorProps> = ({predicate, onChange}) => {
    return (
        <>
            <TextField select
                       value={getType(predicate)}
                       onChange={(event) => onChange(getPredicate(event.target.value))}
                       margin="normal">
                <MenuItem value={STRING_TEST.EMPTY}>empty</MenuItem>
                <MenuItem value={STRING_TEST.EQUAL_TO}>equal to</MenuItem>
                <MenuItem value={STRING_TEST.CONTAINING}>contains</MenuItem>
                <MenuItem value={STRING_TEST.STARTING_WITH}>starts with</MenuItem>
                <MenuItem value={STRING_TEST.ENDING_WITH}>ends with</MenuItem>
                <MenuItem value={STRING_TEST.MATCHING}>matches</MenuItem>
            </TextField>
            {getDetailsEditor(predicate, onChange)}
        </>
    );
};