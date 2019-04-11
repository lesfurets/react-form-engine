export class ValueUtils {
    static isDefined = (value : any) => value !== undefined
        && value !== null
        && value !== "";
}