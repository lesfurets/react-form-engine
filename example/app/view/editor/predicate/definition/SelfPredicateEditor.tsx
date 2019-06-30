import * as React from "react";
import {SelfPredicate} from "../../../../../../src/dsl/predicate/data/root/SelfPredicate";
import {ReversedPredicateEditor} from "./ReversedPredicateEditor";
import {PredicateEditorComponentProps} from "../utils/PredicateOption";

export const SelfPredicateEditor: React.FunctionComponent<PredicateEditorComponentProps> = ({predicate, onChange}) => (
    <ReversedPredicateEditor predicate={(predicate as SelfPredicate).predicate}
                             onChange={(childPredicate) => onChange(new SelfPredicate(childPredicate))}/>
);