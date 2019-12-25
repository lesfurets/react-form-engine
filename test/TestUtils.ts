import {Validation} from "../src/definition/validation/Validation";
import * as Adapter from 'enzyme-adapter-react-16'
import * as Enzyme from 'enzyme'
import {Field} from "../src/definition/model/Field";
import {FieldType} from "../src/definition/FieldTypes";
import * as UseFieldContext from "../src/redux/useFieldContext";
import * as UseTheme from "../src/structure/context/useTheme";
import {FieldContext} from "../src/definition/FieldContext";
import {ValueSetter} from "../src/redux/useFieldContext";
import {ThemeContextInterface} from "../src/structure/context/ThemeContext";
import {DefaultFieldView} from "../src/theme/component/view/DefaultFieldView";
import {DefaultBlockView} from "../src/theme/component/view/DefaultBlockView";
import {DefaultFormView} from "../src/theme/component/view/DefaultFormView";
import {DefaultFieldInjector} from "../src/theme/component/field/DefaultFieldInjector";

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
    const useFormStoreSpy = jest.spyOn(UseFieldContext, 'useFieldContext');
    useFormStoreSpy.mockImplementation(() => [fieldContext || {}, setFieldValue || (() => {})]);
}

export const mockThemeContext = (theme: Partial<ThemeContextInterface>) => {
    const useThemeContextSpy = jest.spyOn(UseTheme, 'useTheme');
    useThemeContextSpy.mockImplementation(() => ({
        FieldView: theme.FieldView || DefaultFieldView,
        BlockView: theme.BlockView || DefaultBlockView,
        FormView: theme.FormView || DefaultFormView,
        fieldInjector: theme.fieldInjector || DefaultFieldInjector.inject,
    }));
}

export const emptyCallback = () => {
};