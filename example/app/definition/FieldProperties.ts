import {Property} from "./Property";
import {VisibilityBuilder} from "../../../src/dsl/visibility/VisibilityBuilder";
import {Predicates} from "../../../src/dsl/predicate/builder/Predicates";
import {ModelUtils} from "../../../src/definition/ModelUtils";
import {Form} from "../../../src/definition/model/Form";
import {ValidationBuilder} from "../../../src/dsl/validation/ValidationBuilder";

export const PLACEHOLDER: Property = {key:"placeholder", label: "Placeholder", getDefaultValue: () => ""};
export const SYMBOL: Property = {key:"symbol", label: "Symbol", getDefaultValue: () => ""};
export const VALUES: Property = {key:"values", label: "Values", getDefaultValue: () => []};
export const VALIDATION_RULE: Property = {
    key: "validationRule",
    label: "Validation Rule",
    getDefaultValue: () => ValidationBuilder.error("Error message").when(Predicates.self.is.defined()),
    cleanAlso: "getValidation"
};
export const VISIBILITY_RULE: Property = {
    key: "visibilityRule",
    label: "Visibility Rule",
    getDefaultValue: (model: Form) => VisibilityBuilder.isNotVisible.when(Predicates.field(ModelUtils.getFieldList(model)[0]).is.defined()),
    cleanAlso: "isVisible"
};