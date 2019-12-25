import {Validation} from "../src/definition/validation/Validation";
import * as Adapter from 'enzyme-adapter-react-16'
import * as Enzyme from 'enzyme'
import {Field} from "../src/definition/model/Field";
import {FieldType, FieldTypes} from "../src/definition/FieldTypes";
import * as UseFieldContext from "../src/redux/useFieldContext";
import * as UseTheme from "../src/structure/context/useTheme";
import {FieldContext} from "../src/definition/FieldContext";
import {ValueSetter} from "../src/redux/useFieldContext";
import {ThemeContextInterface} from "../src/structure/context/ThemeContext";
import {DefaultFieldView} from "../src/theme/component/view/DefaultFieldView";
import {DefaultBlockView} from "../src/theme/component/view/DefaultBlockView";
import {DefaultFormView} from "../src/theme/component/view/DefaultFormView";
import {DefaultFieldInjector} from "../src/theme/component/field/DefaultFieldInjector";
import {Block} from "../src/definition/model/Block";
import {Form} from "../src/definition/model/Form";

export const initTest = () => {
    Enzyme.configure({
        adapter: new Adapter(),
    })
};

export const TestType = new FieldType("TestType");

export const dummyField: Field = {id: "test-field-id", type: TestType};

export const dummyBlock: Block = {
    id: "block-test",
    label: "block-label",
    index: 0,
    fields: [
        {id: 'testChild1', type: FieldTypes.INPUT_TEXT},
        {id: 'testChild2', type: FieldTypes.INPUT_TEXT},
    ]
};

export const dummyForm: Form = {
    id: "form",
    blocks:
        [
            {id: "block1", label: "block1", index: 0, fields: [{id: 'testChild1', type: FieldTypes.INPUT_TEXT}]},
            {id: "block2", label: "block2", index: 1, fields: [{id: 'testChild2', type: FieldTypes.INPUT_TEXT}]}
        ],
};

export const mockFormStore = (fieldContext?: FieldContext, setFieldValue?: ValueSetter) => {
    const useFormStoreSpy = jest.spyOn(UseFieldContext, 'useFieldContext');
    useFormStoreSpy.mockImplementation(() => [fieldContext || {}, setFieldValue || (() => {})]);
}

export const mockThemeContext = (theme: Partial<ThemeContextInterface> = {}) => {
    const useThemeContextSpy = jest.spyOn(UseTheme, 'useTheme');
    useThemeContextSpy.mockImplementation(() => ({
        FieldView: theme.FieldView || DefaultFieldView,
        BlockView: theme.BlockView || DefaultBlockView,
        FormView: theme.FormView || DefaultFormView,
        fieldInjector: theme.fieldInjector || DefaultFieldInjector.inject,
    }));
};

export const fieldError = new Validation(false, "error-test");

export const emptyCallback = () => {
};