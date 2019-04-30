import {StringPredicate} from "./StringPredicate";

export class StringEqualToPredicate extends StringPredicate {
    value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }
}

