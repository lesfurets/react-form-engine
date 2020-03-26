import * as React from "react";
import {DefaultFormView} from "../theme/view/DefaultFormView";
import {DefaultBlockView} from "../theme/view/DefaultBlockView";
import {DefaultFieldView} from "../theme/view/DefaultFieldView";
import {EventCallBack} from "../definition/event/service/EventService";
import {FormWrapper} from "../wrapper/FormWrapper";
import {Form} from "../definition/model/Form";
import {FieldView} from "../definition/theme/view/FieldView";
import {BlockView} from "../definition/theme/view/BlockView";
import {FormView} from "../definition/theme/view/FormView";
import {ThemeContext} from "../definition/theme/access/ThemeContext";
import {FieldInjector} from "../definition/theme/field/FieldInjector";
import {DefaultFieldInjector} from "../theme/field/DefaultFieldInjector";
import {FormDataContext} from "../definition/data/access/FormDataContext";
import {FormData} from "../definition/data/FormData";
import {FormElement} from "..";
import {NavigationManagerContainer} from "../navigation/NavigationManagerContainer";
import {EventManagerContainer} from "../event/EventManagerContainer";

export interface FormEngineProps {
    form: Form,
    FormView?: FormView
    BlockView?: BlockView
    FieldView?: FieldView
    onEvent?: EventCallBack
    fieldInjector?: FieldInjector,
    formData?: FormData,
    initialStep?: FormElement,
}

export const FormEngine: React.FunctionComponent<FormEngineProps> =
    ({form, formData = {} as FormData, initialStep = form.blocks[0], onEvent, FormView, BlockView, FieldView, fieldInjector}) =>
        (
            <FormDataContext.Provider value={formData}>
                <NavigationManagerContainer initialStep={initialStep}>
                    <EventManagerContainer onEvent={onEvent!}>
                        <ThemeContext.Provider value={{
                            FormView: FormView!,
                            BlockView: BlockView!,
                            FieldView: FieldView!,
                            fieldInjector: fieldInjector!
                        }}>
                            <FormWrapper form={form}/>
                        </ThemeContext.Provider>
                    </EventManagerContainer>
                </NavigationManagerContainer>
            </FormDataContext.Provider>
        );

FormEngine.defaultProps = {
    fieldInjector: DefaultFieldInjector.inject,
    FormView: DefaultFormView,
    BlockView: DefaultBlockView,
    FieldView: DefaultFieldView,
    onEvent: () => {},
};