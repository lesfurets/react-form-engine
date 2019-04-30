import {StringPredicate} from "./StringPredicate";

export class StringRegExpPredicate extends StringPredicate {
    regExp: RegExp;

    constructor(regExp: RegExp) {
        super();
        this.regExp = regExp;
    }
}

