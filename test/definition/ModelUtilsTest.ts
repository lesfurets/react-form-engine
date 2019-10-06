import {Field} from "../../src/definition/model/Field";
import {Block} from "../../src/definition/model/Block";
import {FieldTypes} from "../../src/definition/FieldTypes";
import {VALID} from "../../src/definition/validation/Validation";
import {TestUtils} from "../TestUtils";
import {isBlockValid} from "../../src/definition/ModelUtils";

describe("FormEngine/ModelUtils", () => {

    describe("isBlockValid", () => {

        let checkBlockValidation = (success: boolean, fields: Field[]) => {
            let block: Block = {
                id: "block-test",
                label: "block-label",
                index: 0,
                fields: [
                    {id: 'testChild0', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID}
                ]
            };
            block.fields = block.fields.concat(fields);

            expect(isBlockValid(block, {})).toBe(success);
        };

        it("Should validate Field by default", () => {
            checkBlockValidation(true, [{id: 'testChild1', type: FieldTypes.INPUT_TEXT}]);
        });

        it("Should validate if Field is valid", () => {
            checkBlockValidation(true, [{id: 'testChild1', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID}]);
        });

        it("Should validate if Field is visible and valid", () => {
            checkBlockValidation(true, [{
                id: 'testChild1',
                type: FieldTypes.INPUT_TEXT,
                isVisible: () => true,
                getValidation: () => VALID
            }]);
        });

        it("Should validate if all Fields are valid", () => {
            checkBlockValidation(true,
                [{id: 'testChild1', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID},
                    {id: 'testChild2', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID},
                    {id: 'testChild3', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID}]);
        });

        it("Should not validate if 1 Fields is not valid", () => {
            checkBlockValidation(false,
                [{id: 'testChild1', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID},
                    {id: 'testChild2', type: FieldTypes.INPUT_TEXT, getValidation: () => TestUtils.ERROR},
                    {id: 'testChild3', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID}]);
        });

        it("Should not validate if Field is visible and invalid", () => {
            checkBlockValidation(false, [{id: 'testChild1', type: FieldTypes.INPUT_TEXT, getValidation: () => TestUtils.ERROR}]);
        });

        it("Should validate if Field in error if not visible", () => {
            checkBlockValidation(true, [{
                id: 'testChild1',
                type: FieldTypes.INPUT_TEXT,
                isVisible: () => false,
                getValidation: () => TestUtils.ERROR
            }]);
        });

    });

});