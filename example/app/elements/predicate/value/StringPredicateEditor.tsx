import * as React from "react";
import {PredicateEditorComponentProps} from "../PredicateEditor";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";
import {ValueDefinedPredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValueDefinedPredicate";
import {ValueEqualToFieldPredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValueEqualToFieldPredicate";
import {StringPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringPredicate";
import {ValuePredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValuePredicate";
import {FieldSelector} from "../../FieldSelector";
import {ModelUtils} from "../../../../../src/definition/ModelUtils";
import {FormEditor} from "../../../editor/FormEditor";
import {StringEmptyPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEmptyPredicate";
import {StringEqualToPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEqualToPredicate";
import {StringContainPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringContainPredicate";
import {StringStartWithPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringStartWithPredicate";
import {StringEndWithPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEndWithPredicate";
import {StringRegExpPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringRegExpPredicate";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {ValueDetailEditor} from "../../ValueDetailEditor";
import {buildOptionPredicateEditor} from "../utils/PredicateOption";

export const StringPredicateEditor = buildOptionPredicateEditor([
    {
        id: "empty",
        label:"empty",
        predicate: predicate => predicate instanceof StringEmptyPredicate,
        detailsProvider: () => null,
        defaultPredicate: () => new StringEmptyPredicate()
    },
    {
        id: "equalTo",
        label:"equal to",
        predicate: predicate => predicate instanceof StringEqualToPredicate,
        detailsProvider: (predicate, onChange) => <ValueDetailEditor details={(predicate as StringEqualToPredicate).value} onChange={details => onChange(new StringEqualToPredicate(details))}/>,
        defaultPredicate: () => new StringEqualToPredicate("")
    },
    {
        id: "containing",
        label:"containing",
        predicate: predicate => predicate instanceof StringContainPredicate,
        detailsProvider: (predicate, onChange) => <ValueDetailEditor details={(predicate as StringContainPredicate).value} onChange={details => onChange(new StringContainPredicate(details))}/>,
        defaultPredicate: () => new StringContainPredicate("")
    },
    {
        id: "startingWith",
        label:"starting with",
        predicate: predicate => predicate instanceof StringStartWithPredicate,
        detailsProvider: (predicate, onChange) => <ValueDetailEditor details={(predicate as StringStartWithPredicate).value} onChange={details => onChange(new StringStartWithPredicate(details))}/>,
        defaultPredicate: () => new StringStartWithPredicate("")
    },
    {
        id: "endingWith",
        label:"ending with",
        predicate: predicate => predicate instanceof StringEndWithPredicate,
        detailsProvider: (predicate, onChange) => <ValueDetailEditor details={(predicate as StringEndWithPredicate).value} onChange={details => onChange(new StringEndWithPredicate(details))}/>,
        defaultPredicate: () => new StringEndWithPredicate("")
    },
    {
        id: "matching",
        label:"matching",
        predicate: predicate => predicate instanceof StringRegExpPredicate,
        detailsProvider: (predicate, onChange) => <ValueDetailEditor details={(predicate as StringRegExpPredicate).regExp.source} onChange={details => onChange(new StringRegExpPredicate(new RegExp(details)))}/>,
        defaultPredicate: () => new StringRegExpPredicate(/.*/)
    },
]);