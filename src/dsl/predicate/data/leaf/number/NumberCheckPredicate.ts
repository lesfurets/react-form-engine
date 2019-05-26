import {NumberPredicate} from "./NumberPredicate";

export class NumberCheckPredicate extends NumberPredicate {
    test: (value: number) => boolean;

    constructor(test: (value: number) => boolean) {
        super();
        this.test = test;
    }
}

