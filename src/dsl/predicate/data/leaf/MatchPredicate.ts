import {PredicateLeaf} from "./PredicateLeaf";
import {Field, FieldContextState} from "../../../../definition/FormModel";

export class MatchPredicate extends PredicateLeaf {
    matcher: (context: FieldContextState) => boolean;

    constructor(matcher: (context: FieldContextState) => boolean) {
        super();
        this.matcher = matcher;
    }
}