import {Validation} from "../definition/validation/Validation";
import * as Adapter from 'enzyme-adapter-react-16'
import * as Enzyme from 'enzyme'
import {Field} from "../definition/model/Field";
import {FieldType, FieldTypes} from "../definition/FieldTypes";
import * as UseFieldContext from "../definition/redux/useFieldContext";
import * as UseNavigation from "../definition/redux/useNavigation";
import * as UseTheme from "../definition/theme/useTheme";
import {FieldContext} from "../redux/FieldContext";
import {ValueSetter} from "../definition/redux/useFieldContext";
import {ThemeContextInterface} from "../definition/theme/ThemeContext";
import {DefaultFieldView} from "../theme/view/DefaultFieldView";
import {DefaultBlockView} from "../theme/view/DefaultBlockView";
import {DefaultFormView} from "../theme/view/DefaultFormView";
import {DefaultFieldInjector} from "../theme/field/DefaultFieldInjector";
import {Block} from "../definition/model/Block";
import {Form} from "../definition/model/Form";
import {FormElement} from "../definition/model/FormElement";
import {NavigationSetter} from "../definition/redux/useNavigation";
import {NavigationContext} from "../redux/NavigationContext";

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
};

export const mockNavigationStore = <T extends FormElement>(navigationTarget?: T, setNavigationTarget?: NavigationSetter<T>) => {
    const useNavigationStoreSpy = jest.spyOn(UseNavigation, 'useNavigation');
    useNavigationStoreSpy.mockImplementation(() => [navigationTarget || {} as T, setNavigationTarget || (() => {})]);
};

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