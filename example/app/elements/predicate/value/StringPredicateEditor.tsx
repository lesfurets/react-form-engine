import * as React from "react";
import {StringEmptyPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEmptyPredicate";
import {StringEqualToPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEqualToPredicate";
import {StringContainPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringContainPredicate";
import {StringStartWithPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringStartWithPredicate";
import {StringEndWithPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEndWithPredicate";
import {StringRegExpPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringRegExpPredicate";
import {ValueDetailEditor} from "../utils/ValueDetailEditor";
import {buildOptionPredicateEditor} from "../utils/PredicateOption";

export const StringPredicateEditor = buildOptionPredicateEditor([
    {
        id: "empty",
        label:"empty",
        matchesPredicate: predicate => predicate instanceof StringEmptyPredicate,
        detailsComponent: () => null,
        defaultPredicate: () => new StringEmptyPredicate()
    },
    {
        id: "equalTo",
        label:"equal to",
        matchesPredicate: predicate => predicate instanceof StringEqualToPredicate,
        detailsComponent: (predicate, onChange) => <ValueDetailEditor details={(predicate as StringEqualToPredicate).value} onChange={details => onChange(new StringEqualToPredicate(details))}/>,
        defaultPredicate: () => new StringEqualToPredicate("")
    },
    {
        id: "containing",
        label:"containing",
        matchesPredicate: predicate => predicate instanceof StringContainPredicate,
        detailsComponent: (predicate, onChange) => <ValueDetailEditor details={(predicate as StringContainPredicate).value} onChange={details => onChange(new StringContainPredicate(details))}/>,
        defaultPredicate: () => new StringContainPredicate("")
    },
    {
        id: "startingWith",
        label:"starting with",
        matchesPredicate: predicate => predicate instanceof StringStartWithPredicate,
        detailsComponent: (predicate, onChange) => <ValueDetailEditor details={(predicate as StringStartWithPredicate).value} onChange={details => onChange(new StringStartWithPredicate(details))}/>,
        defaultPredicate: () => new StringStartWithPredicate("")
    },
    {
        id: "endingWith",
        label:"ending with",
        matchesPredicate: predicate => predicate instanceof StringEndWithPredicate,
        detailsComponent: (predicate, onChange) => <ValueDetailEditor details={(predicate as StringEndWithPredicate).value} onChange={details => onChange(new StringEndWithPredicate(details))}/>,
        defaultPredicate: () => new StringEndWithPredicate("")
    },
    {
        id: "matching",
        label:"matching",
        matchesPredicate: predicate => predicate instanceof StringRegExpPredicate,
        detailsComponent: (predicate, onChange) => <ValueDetailEditor details={(predicate as StringRegExpPredicate).regExp.source} onChange={details => onChange(new StringRegExpPredicate(new RegExp(details)))}/>,
        defaultPredicate: () => new StringRegExpPredicate(/.*/)
    },
]);