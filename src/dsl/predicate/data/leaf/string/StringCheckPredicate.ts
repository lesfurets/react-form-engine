import {StringPredicate} from "./StringPredicate";

export class StringCheckPredicate extends StringPredicate {
    test: (value: string) => boolean;

    constructor(test: (value: string) => boolean) {
        super();
        this.test = test;
    }
}

