import {NumberPredicate} from "./NumberPredicate";

export class NumberLowerThanPredicate extends NumberPredicate {
    value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }
}

