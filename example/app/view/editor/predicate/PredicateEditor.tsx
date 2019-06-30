import * as React from "react";
import {FormEditor} from "../../../editor/FormEditor";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";
import {SelfPredicate} from "../../../../../src/dsl/predicate/data/root/SelfPredicate";
import {FieldPredicate} from "../../../../../src/dsl/predicate/data/root/FieldPredicate";
import {ModelUtils} from "../../../../../src/definition/ModelUtils";
import {FieldPredicateEditor} from "./definition/FieldPredicateEditor";
import {SelfPredicateEditor} from "./definition/SelfPredicateEditor";
import {buildOptionPredicateEditor} from "./utils/PredicateOption";


export interface PredicateEditorComponentProps {
    predicate: Predicate,
    onChange: (predicate: Predicate) => void
};

export const PredicateEditorInner = buildOptionPredicateEditor([
    {
        id: "self",
        label: "self",
        matchesPredicate: (predicate) => predicate instanceof SelfPredicate,
        detailsComponent: (predicate,onChange) => <SelfPredicateEditor predicate={predicate as SelfPredicate} onChange={onChange}/>,
        defaultPredicate: predicate => new SelfPredicate((predicate as SelfPredicate | FieldPredicate).predicate)
    },
    {
        id: "field",
        label: "the field",
        matchesPredicate: (predicate) => predicate instanceof FieldPredicate,
        detailsComponent: (predicate,onChange) => <FieldPredicateEditor predicate={predicate as FieldPredicate} onChange={onChange}/>,
        defaultPredicate: predicate => new FieldPredicate(
            predicate instanceof FieldPredicate ? predicate.field : ModelUtils.getFieldList(FormEditor.MODEL)[0],
            (predicate as SelfPredicate | FieldPredicate).predicate)
    }
]);

export const PredicateEditor: React.FunctionComponent<PredicateEditorComponentProps> = ({predicate, onChange}) => (
    <span className="PredicateEditor">if&nbsp;<PredicateEditorInner predicate={predicate} onChange={onChange}/></span>
);