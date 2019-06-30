import {FieldType, FieldTypes} from "../../../src/definition/FieldTypes";
import {FieldTypeDetail} from "./FieldTypesDetail";
import {PLACEHOLDER, SYMBOL, VALIDATION_RULE, VALUES, VISIBILITY_RULE} from "./FieldProperties"
import * as AllProperties from "./FieldProperties"
import {PropertyRemoval, PropertyUpdate, PropertyValueChange} from "../editor/ModelUpdater";
import {Field} from "../../../src/definition/model/Field";
import {Form} from "../../../src/definition/model/Form";

const COMMON = [VISIBILITY_RULE, VALIDATION_RULE];

export const getFieldTypesDetails: (type: FieldType) => FieldTypeDetail = (type: FieldType) => {
    switch (type) {
        case FieldTypes.INPUT_TEXT:
            return {
                label: "Text",
                properties: [PLACEHOLDER,...COMMON],
                mandatory:[VISIBILITY_RULE]
            };
        case FieldTypes.INPUT_EMAIL:
            return {
                label: "Email",
                properties: [PLACEHOLDER,...COMMON]
            };
        case FieldTypes.INPUT_PASSWORD:
            return {
                label: "Password",
                properties: [PLACEHOLDER,...COMMON]
            };
        case FieldTypes.INPUT_INTEGER:
            return {
                label: "Integer",
                properties: [PLACEHOLDER, SYMBOL,...COMMON]
            };
        case FieldTypes.INPUT_DECIMAL:
            return {
                label: "Decimal",
                properties: [PLACEHOLDER, SYMBOL,...COMMON]
            };
        case FieldTypes.INPUT_RADIO:
            return {
                label: "Radio",
                properties: [VALUES,...COMMON],
                mandatory:[VALUES]
            };
        case FieldTypes.INPUT_SELECT:
            return {
                label: "Select",
                properties: [VALUES,...COMMON],
                mandatory:[VALUES]
            };
        case FieldTypes.INPUT_CHECKBOX:
            return {
                label: "Checkbox",
                properties: [VALUES,...COMMON],
                mandatory:[VALUES]
            };
        case FieldTypes.INPUT_TEXT_AREA:
            return {
                label: "Text Area",
                properties: [PLACEHOLDER,...COMMON]
            };
        default:
            return {
                label: "Unsupported",
                properties:[],
            }
    }
};

export const getUpdates  = (currentField: Field, newType: FieldType, model: Form) => {
    const updates: PropertyUpdate[]  = [new PropertyValueChange("type", newType)];
    const details = getFieldTypesDetails(newType);
    Object.values(AllProperties).forEach(property => {
        if(!details.properties.includes(property) && currentField[property.key] !== undefined){
            updates.push(new PropertyRemoval(property.key));
        }
        else if(details.mandatory!.includes(property) && currentField[property.key] === undefined){
            updates.push(new PropertyValueChange(property.key, property.getDefaultValue(model)));
        }
    });
    return updates;
}