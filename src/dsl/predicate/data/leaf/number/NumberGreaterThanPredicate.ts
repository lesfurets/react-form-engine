import {NumberPredicate} from "./NumberPredicate";

export class NumberGreaterThanPredicate extends NumberPredicate {
    value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }
}

