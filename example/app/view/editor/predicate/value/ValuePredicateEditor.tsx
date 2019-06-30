import * as React from "react";
import {ValueDefinedPredicate} from "../../../../../../src/dsl/predicate/data/leaf/value/ValueDefinedPredicate";
import {ValueEqualToFieldPredicate} from "../../../../../../src/dsl/predicate/data/leaf/value/ValueEqualToFieldPredicate";
import {FormEditor} from "../../../../editor/FormEditor";
import {ModelUtils} from "../../../../../../src/definition/ModelUtils";
import {StringPredicate} from "../../../../../../src/dsl/predicate/data/leaf/string/StringPredicate";
import {StringEmptyPredicate} from "../../../../../../src/dsl/predicate/data/leaf/string/StringEmptyPredicate";
import {FieldSelector} from "../utils/FieldSelector";
import {StringPredicateEditor} from "./StringPredicateEditor";
import {buildOptionPredicateEditor} from "../utils/PredicateOption";

export const ValuePredicateEditor = buildOptionPredicateEditor([
    {
        id: "defined",
        label: "defined",
        matchesPredicate: (predicate) => predicate instanceof ValueDefinedPredicate,
        detailsComponent: () => null,
        defaultPredicate: () => new ValueDefinedPredicate()
    },
    {
        id: "equalToField",
        label: "equal to field",
        matchesPredicate: (predicate) => predicate instanceof ValueEqualToFieldPredicate,
        detailsComponent: (predicate, onChange) => {
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
        matchesPredicate: (predicate) => predicate instanceof StringPredicate,
        detailsComponent: (predicate, onChange) => <StringPredicateEditor predicate={predicate} onChange={onChange}/>,
        defaultPredicate: () => new StringEmptyPredicate()
    },
]);