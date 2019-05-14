import * as React from "react";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";
import {FieldPredicate} from "../../../../../src/dsl/predicate/data/root/FieldPredicate";
import {FieldSelector} from "../../FieldSelector";
import {ModelUtils} from "../../../../../src/definition/ModelUtils";
import {FormEditor} from "../../../editor/FormEditor";
import {ReversedPredicateEditor} from "./ReversedPredicateEditor";

interface FieldPredicateEditorProps {
    predicate: FieldPredicate,
    onChange: (predicate: Predicate) => void
}

export const FieldPredicateEditor: React.FunctionComponent<FieldPredicateEditorProps> = ({predicate, onChange}) => (
    <>
        <FieldSelector field={predicate.field}
                       fieldList={ModelUtils.getFieldList(FormEditor.MODEL)}
                       onChange={(field) => onChange(new FieldPredicate(field, predicate.predicate))}/>
        <ReversedPredicateEditor predicate={predicate.predicate}
                                 onChange={(childPredicate) => onChange(new FieldPredicate(predicate.field, childPredicate))}/>
    </>
);