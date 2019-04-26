import {PredicateLeaf} from "./PredicateLeaf";
import {Field, FieldContext} from "../../../../definition/FormModel";

export class MatchPredicate extends PredicateLeaf {
    matcher: (context: FieldContext) => boolean;

    constructor(matcher: (context: FieldContext) => boolean) {
        super();
        this.matcher = matcher;
    }
}