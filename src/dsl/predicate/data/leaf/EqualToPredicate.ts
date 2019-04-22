import {PredicateLeaf} from "../PredicateLeaf";

export class EqualToPredicate extends PredicateLeaf {
    value: String;

    constructor(value: String) {
        super();
        this.value = value;
    }
}

