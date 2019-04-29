import {PredicateLeaf} from "./PredicateLeaf";

export class StringEqualToPredicate extends PredicateLeaf {
    value: String;

    constructor(value: String) {
        super();
        this.value = value;
    }
}

