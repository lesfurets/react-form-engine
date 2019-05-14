import * as React from "react";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";
import {SelfPredicate} from "../../../../../src/dsl/predicate/data/root/SelfPredicate";
import {ReversedPredicateEditor} from "./ReversedPredicateEditor";

interface SelfPredicateEditorProps {
    predicate: SelfPredicate,
    onChange: (predicate: Predicate) => void
}


export const SelfPredicateEditor: React.FunctionComponent<SelfPredicateEditorProps> = ({predicate, onChange}) => (
    <ReversedPredicateEditor predicate={predicate.predicate}
                             onChange={(childPredicate) => onChange(new SelfPredicate(childPredicate))}/>
);