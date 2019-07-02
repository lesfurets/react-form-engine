import {Property} from "./Property";
import {VisibilityBuilder} from "../../../src/dsl/visibility/VisibilityBuilder";
import {Predicates} from "../../../src/dsl/predicate/builder/Predicates";
import {ModelUtils} from "../../../src/definition/ModelUtils";
import {Form} from "../../../src/definition/model/Form";
import {ValidationBuilder} from "../../../src/dsl/validation/ValidationBuilder";

export const LABEL: Property = {key:"label", label: "Label", getDefaultValue: () => ""};