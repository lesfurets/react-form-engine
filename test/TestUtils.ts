import {Validation} from "../src/definition/validation/Validation";
import * as Adapter from 'enzyme-adapter-react-16'
import * as Enzyme from 'enzyme'
import {Field} from "../src/definition/model/Field";
import {FieldType} from "../src/definition/FieldTypes";
import * as UseFieldContext from "../src/redux/useFieldContext";
import {FieldContext} from "../src/definition/FieldContext";
import {ValueSetter} from "../src/redux/useFieldContext";

export const TestUtils = {
    init: () => {
        Enzyme.configure({
            adapter: new Adapter(),
        })
    },

    emptyCallback: () => {
    },

    ERROR: new Validation(false, "error-test"),
};

export const TestType = new FieldType("TestType");

export const dummyField: Field = {id: "test-field-id", type: TestType};

export const mockFormStore = (fieldContext?: FieldContext, setFieldValue?: ValueSetter) => {
    const useNavigationSpy = jest.spyOn(UseFieldContext, 'useFieldContext');
    useNavigationSpy.mockImplementation(() => [fieldContext || {}, setFieldValue || (() => {})]);
}

export const emptyCallback = () => {
};