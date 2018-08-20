export class ValueUtils {
    static isDefined = (value) => value !== undefined
        && value !== null
        && value !== "";
}