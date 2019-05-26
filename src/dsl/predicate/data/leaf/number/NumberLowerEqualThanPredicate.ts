import {NumberPredicate} from "./NumberPredicate";

export class NumberLowerEqualThanPredicate extends NumberPredicate {
    value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }
}

