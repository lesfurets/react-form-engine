import * as React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {ReversedPredicate} from "../../../../../src/dsl/predicate/data/operation/ReversedPredicate";
import {PredicateEditorComponentProps} from "../PredicateEditor";
import {ValuePredicateEditor} from "../value/ValuePredicateEditor";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";
import {buildOptionPredicateEditor} from "../utils/PredicateOption";
import {ReactNode} from "react";

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