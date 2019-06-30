import * as React from "react";
import {ReversedPredicate} from "../../../../../../src/dsl/predicate/data/operation/ReversedPredicate";
import {ValuePredicateEditor} from "../value/ValuePredicateEditor";
import {buildOptionPredicateEditor} from "../utils/PredicateOption";

export const ReversedPredicateEditor = buildOptionPredicateEditor([
    {
        id: "is",
        label: "is",
        matchesPredicate: predicate => !(predicate instanceof ReversedPredicate),
        detailsComponent: (predicate, onChange) => <ValuePredicateEditor predicate={predicate}
                                                                         onChange={(childPredicate) => onChange(childPredicate)}/>,
        defaultPredicate: predicate => predicate instanceof ReversedPredicate ? predicate.child: predicate,
    },
    {
        id: "isNot",
        label: "is not",
        matchesPredicate: predicate => predicate instanceof ReversedPredicate,
        detailsComponent: (predicate, onChange) => <ValuePredicateEditor predicate={(predicate as ReversedPredicate).child}
                                                                         onChange={(childPredicate) => onChange(new ReversedPredicate(childPredicate))}/>,
        defaultPredicate: predicate => new ReversedPredicate(predicate),
    }
]);