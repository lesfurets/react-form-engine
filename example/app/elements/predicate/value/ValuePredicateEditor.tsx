import * as React from "react";
import {PredicateEditorComponentProps} from "../PredicateEditor";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";
import {ValueDefinedPredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValueDefinedPredicate";
import {ValueEqualToFieldPredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValueEqualToFieldPredicate";
import {FormEditor} from "../../../editor/FormEditor";
import {ModelUtils} from "../../../../../src/definition/ModelUtils";
import {StringPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringPredicate";
import {StringEmptyPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEmptyPredicate";
import {PropertyEditor} from "../../PropertyEditor";
import {FieldSelector} from "../../FieldSelector";
import {ValuePredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValuePredicate";
import {StringPredicateEditor} from "./StringPredicateEditor";


let VALUE_TEST = {
    DEFINED: "defined",
    EQUAL_TO_FIELD: "equalToField",
    A_STRING: "aString",
};

const getType = (predicate: Predicate) => {
    if (predicate instanceof ValueDefinedPredicate) {
        return VALUE_TEST.DEFINED;
    }
    if (predicate instanceof ValueEqualToFieldPredicate) {
        return VALUE_TEST.EQUAL_TO_FIELD;
    }
    if (predicate instanceof StringPredicate) {
        return VALUE_TEST.A_STRING;
    }
    return ""
};

const getDetailsEditor = (currentPredicate: Predicate, onChange: (predicate: ValuePredicate | StringPredicate) => void) => {
    if (currentPredicate instanceof ValueEqualToFieldPredicate) {
        let equalToPredicate = currentPredicate as ValueEqualToFieldPredicate;
        return <FieldSelector field={equalToPredicate.field}
                              fieldList={ModelUtils.getFieldList(FormEditor.MODEL)}
                              onChange={field => onChange(new ValueEqualToFieldPredicate(field))}/>;
    }
    if (currentPredicate instanceof StringPredicate) {
        return <StringPredicateEditor predicate={currentPredicate} onChange={onChange}/>
    }
    return null;
};

const getPredicate = (code: string) => {
    switch (code) {
        case VALUE_TEST.DEFINED:
            return new ValueDefinedPredicate();
        case VALUE_TEST.EQUAL_TO_FIELD:
            return new ValueEqualToFieldPredicate(ModelUtils.getFieldList(FormEditor.MODEL)[0]);
        case VALUE_TEST.A_STRING:
            return new StringEmptyPredicate();
    }
    return new ValueDefinedPredicate();
};


interface ValuePredicateEditorProps {
    predicate: Predicate,
    onChange: (predicate: ValuePredicate | StringPredicate) => void
}

export const ValuePredicateEditor: React.FunctionComponent<ValuePredicateEditorProps> = ({predicate, onChange}) => {
    return (
        <>
            <TextField select
                       value={getType(predicate)}
                       onChange={(event) => onChange(getPredicate(event.target.value))}
                       margin="normal">
                <MenuItem value={VALUE_TEST.DEFINED}>defined</MenuItem>
                <MenuItem value={VALUE_TEST.EQUAL_TO_FIELD}>equal to field</MenuItem>
                <MenuItem value={VALUE_TEST.A_STRING}>a string</MenuItem>
            </TextField>
            {getDetailsEditor(predicate, onChange)}
        </>
    );
};