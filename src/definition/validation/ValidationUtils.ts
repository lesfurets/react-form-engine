import {VALID, Validation} from "./Validation";
import {Field} from "../model/Field";
import {FormData} from "../data/FormData";

export class ValidationUtils {

    static isNullOrUndefined = (value: any): boolean => value === undefined
        || value === null
        || (typeof value === "undefined")
        || value === "UNDEFINED"
        || value === "";

    static isDefined = (field: Field, context: FormData, errorMessage: string): Validation => {
        if (ValidationUtils.isNullOrUndefined(context[field.id])) {
            return new Validation(false, errorMessage);
        }
        return VALID;
    };

    static isDefinedAndEqualTo = (field: Field, context: FormData, value: string, errorMessage: string): Validation => {
        let contextValue = context[field.id];
        if (ValidationUtils.isNullOrUndefined(contextValue) || contextValue !== value) {
            return new Validation(false, errorMessage);
        }
        return VALID;
    };
}
