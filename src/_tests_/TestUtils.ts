import {Validation} from "../definition/validation/Validation";
import * as Adapter from 'enzyme-adapter-react-16'
import * as Enzyme from 'enzyme'
import {Field} from "../definition/model/Field";
import {FieldType, FieldTypes} from "../definition/FieldTypes";
import * as UseFieldContext from "../definition/data/access/useFormData";
import * as UseNavigation from "../definition/navigation/useNavigation";
import * as UseTheme from "../definition/theme/access/useTheme";
import * as UseEvent from "../definition/event/service/access/useEventMulticaster";
import * as UseField from "../definition/model/access/useField";
import * as UseBlock from "../definition/model/access/useBlock";
import * as UseForm from "../definition/model/access/useForm";
import {FormData} from "../definition/data/FormData";
import {ValueSetter} from "../definition/data/access/useFormData";
import {ThemeContextInterface} from "../definition/theme/access/ThemeContext";
import {DefaultFieldView} from "../theme/view/DefaultFieldView";
import {DefaultBlockView} from "../theme/view/DefaultBlockView";
import {DefaultFormView} from "../theme/view/DefaultFormView";
import {DefaultFieldInjector} from "../theme/field/DefaultFieldInjector";
import {Block} from "../definition/model/Block";
import {Form} from "../definition/model/Form";
import {FormElement} from "../definition/model/FormElement";
import {NavigationSetter} from "../definition/navigation/useNavigation";
import {EventCallBack, EventService} from "../definition/event/service/EventService";

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
    fields: [
        {id: 'testChild1', type: FieldTypes.INPUT_TEXT},
        {id: 'testChild2', type: FieldTypes.INPUT_TEXT},
    ]
};

export const dummyForm: Form = {
    id: "form",
    blocks:
        [
            {id: "block1", label: "block1", fields: [{id: 'testChild1', type: FieldTypes.INPUT_TEXT}]},
            {id: "block2", label: "block2", fields: [{id: 'testChild2', type: FieldTypes.INPUT_TEXT}]}
        ],
};

export const mockFormStore = (fieldContext?: FormData, setFieldValue?: ValueSetter) => {
    const useFormStoreSpy = jest.spyOn(UseFieldContext, 'useFormData');
    useFormStoreSpy.mockImplementation(() => [fieldContext || {}, setFieldValue || (() => {})]);
};

export const mockNavigationStore = <T extends FormElement>(navigationTarget?: T, setNavigationTarget?: NavigationSetter<T>) => {
    const useNavigationStoreSpy = jest.spyOn(UseNavigation, 'useNavigation');
    useNavigationStoreSpy.mockImplementation(() => ({currentStep:navigationTarget || {} as T, setCurrentStep:setNavigationTarget || (() => {})}));
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

export const mockEventContext = (callback: EventCallBack = emptyCallback) => {
    const useEventContextSpy = jest.spyOn(UseEvent, 'useEventMulticaster');
    useEventContextSpy.mockImplementation(() => new EventService(callback));
};

export const mockUseField = (field: Field) => {
    const useFieldSpy = jest.spyOn(UseField, 'useField');
    useFieldSpy.mockImplementation(() => field);
};

export const mockUseBlock = (block: Block) => {
    const useBlockSpy = jest.spyOn(UseBlock, 'useBlock');
    useBlockSpy.mockImplementation(() => block);
};

export const mockUseForm = (form: Form) => {
    const useFormSpy = jest.spyOn(UseForm, 'useForm');
    useFormSpy.mockImplementation(() => form);
};

export const fieldError = new Validation(false, "error-test");

export const emptyCallback = () => {
};