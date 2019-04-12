import {VALID, Validation} from "./Validation";
import {Field, FieldContextState} from "../FormModel";

export class ValidationUtils {

    static isNullOrUndefined = (value: any): boolean => value === undefined
        || value === null
        || (typeof value === "undefined")
        || value === "UNDEFINED"
        || value === "";

    static isDefined = (field: Field, context: FieldContextState, errorMessage: string): Validation => {
        if (ValidationUtils.isNullOrUndefined(context[field.id])) {
            return new Validation(false, errorMessage);
        }
        return VALID;
    };

    static isDefinedAndEqualTo = (field: Field, context: FieldContextState, value: string, errorMessage: string): Validation => {
        let contextValue = context[field.id];
        if (ValidationUtils.isNullOrUndefined(contextValue) || contextValue !== value) {
            return new Validation(false, errorMessage);
        }
        return VALID;
    };
}
