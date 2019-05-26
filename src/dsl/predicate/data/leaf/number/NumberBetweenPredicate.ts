import {NumberPredicate} from "./NumberPredicate";

export class NumberBetweenPredicate extends NumberPredicate {
    min: number;
    max: number;

    constructor(min: number, max: number) {
        super();
        this.min = min;
        this.max = max;
    }
}

