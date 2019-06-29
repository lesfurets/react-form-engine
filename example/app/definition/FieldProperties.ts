import {Property} from "./Property";

export const PLACEHOLDER: Property = {key:"placeholder", label: "Placeholder"};
export const SYMBOL: Property = {key:"symbol", label: "Symbol"};
export const VALUES: Property = {key:"values", label: "Values", defaultValue: []};
export const VALIDATION_RULE: Property = {key:"validationRule", label: "Values", cleanAlso:"getValidation"};
export const VISIBILITY_RULE: Property = {key:"visibilityRule", label: "Values", cleanAlso:"isVisible"};