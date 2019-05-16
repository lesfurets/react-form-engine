import * as React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";
import {ValueDefinedPredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValueDefinedPredicate";
import {ValueEqualToFieldPredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValueEqualToFieldPredicate";
import {FormEditor} from "../../../editor/FormEditor";
import {ModelUtils} from "../../../../../src/definition/ModelUtils";
import {StringPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringPredicate";
import {StringEmptyPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEmptyPredicate";
import {FieldSelector} from "../../FieldSelector";
import {ValuePredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValuePredicate";
import {StringPredicateEditor} from "./StringPredicateEditor";
import {PredicateOptionUtils} from "../lib/PredicateOption";

const optionUtils = new PredicateOptionUtils([
    {
        id: "defined",
        label: "defined",
        predicate: (predicate) => predicate instanceof ValueDefinedPredicate,
        detailsProvider: () => null,
        defaultPredicate: () => new ValueDefinedPredicate()
    },
    {
        id: "equalToField",
        label: "equal to field",
        predicate: (predicate) => predicate instanceof ValueEqualToFieldPredicate,
        detailsProvider: (predicate, onChange) => {
            let equalToPredicate = predicate as ValueEqualToFieldPredicate;
            return <FieldSelector field={equalToPredicate.field}
                                  fieldList={ModelUtils.getFieldList(FormEditor.MODEL)}
                                  onChange={field => onChange(new ValueEqualToFieldPredicate(field))}/>;
        },
        defaultPredicate: () => new ValueEqualToFieldPredicate(ModelUtils.getFieldList(FormEditor.MODEL)[0])
    },
    {
        id: "aString",
        label: "a string",
        predicate: (predicate) => predicate instanceof StringPredicate,
        detailsProvider: (predicate, onChange) => <StringPredicateEditor predicate={predicate} onChange={onChange}/>,
        defaultPredicate: () => new StringEmptyPredicate()
    },
]);

interface ValuePredicateEditorProps {
    predicate: Predicate,
    onChange: (predicate: ValuePredicate | StringPredicate) => void
}

export const ValuePredicateEditor: React.FunctionComponent<ValuePredicateEditorProps> = ({predicate, onChange}) => {
    return (
        <>
            <TextField select
                       value={optionUtils.getType(predicate)}
                       onChange={(event) => onChange(optionUtils.getPredicate(event.target.value))}
                       margin="normal">
                {optionUtils.options.map(option => <MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>)}
            </TextField>
            {optionUtils.getDetailsEditor(predicate, onChange)}
        </>
    );
};