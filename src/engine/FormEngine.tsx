import * as React from "react";
import {DefaultFormView} from "../theme/view/DefaultFormView";
import {DefaultBlockView} from "../theme/view/DefaultBlockView";
import {DefaultFieldView} from "../theme/view/DefaultFieldView";
import {EventCallBack, EventService} from "../definition/event/service/EventService";
import {FormWrapper} from "../wrapper/FormWrapper";
import {Form} from "../definition/model/Form";
import {FieldView} from "../definition/theme/view/FieldView";
import {BlockView} from "../definition/theme/view/BlockView";
import {FormView} from "../definition/theme/view/FormView";
import {ThemeContext} from "../definition/theme/ThemeContext";
import {FieldInjector} from "../definition/theme/field/FieldInjector";
import {DefaultFieldInjector} from "../theme/field/DefaultFieldInjector";
import {EventServiceContext} from "../definition/event/service/EventServiceContext";
import {FormDataContext} from "../definition/data/FormDataContext";
import {FormData} from "../definition/data/FormData";
import {useNavigationManager} from "../definition/navigation/useNavigationManager";
import {NavigationContext} from "../definition/navigation/NavigationContext";
import {FormElement} from "..";

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
    ({form, formData = {} as FormData,initialStep = form.blocks[0], onEvent, FormView, BlockView, FieldView, fieldInjector}) => {
        const navigationManager = useNavigationManager(initialStep);
        const [eventMulticaster] = React.useState(() => new EventService(onEvent!));

        React.useEffect(() => eventMulticaster.subscribe(onEvent!), [onEvent]);
        
        return (
            <FormDataContext.Provider value={formData}>
                <NavigationContext.Provider value={navigationManager}>
                    <EventServiceContext.Provider value={eventMulticaster}>
                        <ThemeContext.Provider value={{FormView:FormView!, BlockView:BlockView!, FieldView:FieldView!, fieldInjector:fieldInjector!}}>
                            <FormWrapper form={form}/>
                        </ThemeContext.Provider>
                    </EventServiceContext.Provider>
                </NavigationContext.Provider>
            </FormDataContext.Provider>
        );
    };

FormEngine.defaultProps = {
    fieldInjector: DefaultFieldInjector.inject,
    FormView: DefaultFormView,
    BlockView: DefaultBlockView,
    FieldView: DefaultFieldView,
    onEvent: () => {},
};