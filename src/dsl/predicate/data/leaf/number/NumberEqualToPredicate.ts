import {NumberPredicate} from "./NumberPredicate";

export class NumberEqualToPredicate extends NumberPredicate {
    value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }
}

