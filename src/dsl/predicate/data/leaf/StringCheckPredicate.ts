import {PredicateLeaf} from "./PredicateLeaf";

export class StringCheckPredicate extends PredicateLeaf {
    test: (value: string) => boolean;

    constructor(test: (value: string) => boolean) {
        super();
        this.test = test;
    }
}

