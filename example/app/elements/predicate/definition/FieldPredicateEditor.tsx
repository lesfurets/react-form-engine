import * as React from "react";
import {FieldPredicate} from "../../../../../src/dsl/predicate/data/root/FieldPredicate";
import {FieldSelector} from "../utils/FieldSelector";
import {ModelUtils} from "../../../../../src/definition/ModelUtils";
import {FormEditor} from "../../../editor/FormEditor";
import {ReversedPredicateEditor} from "./ReversedPredicateEditor";
import {PredicateEditorComponentProps} from "../utils/PredicateOption";

export const FieldPredicateEditor: React.FunctionComponent<PredicateEditorComponentProps> = ({predicate, onChange}) => (
    <>
        <FieldSelector field={(predicate as FieldPredicate).field}
                       fieldList={ModelUtils.getFieldList(FormEditor.MODEL)}
                       onChange={(field) => onChange(new FieldPredicate(field, (predicate as FieldPredicate).predicate))}/>
        <ReversedPredicateEditor predicate={(predicate as FieldPredicate).predicate}
                                 onChange={(childPredicate) => onChange(new FieldPredicate((predicate as FieldPredicate).field, childPredicate))}/>
    </>
);