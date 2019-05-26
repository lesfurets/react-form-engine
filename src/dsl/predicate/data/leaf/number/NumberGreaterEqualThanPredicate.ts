import {NumberPredicate} from "./NumberPredicate";

export class NumberGreaterEqualThanPredicate extends NumberPredicate {
    value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }
}

