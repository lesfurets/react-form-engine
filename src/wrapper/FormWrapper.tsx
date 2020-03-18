import * as React from "react";
import {BlockEvents, FormEvents} from "../definition/event/events";
import {FormEvent} from "../definition/event/Event";
import {BlockWrapper} from "./BlockWrapper";
import {Block, BLOCK_STATE} from "../definition/model/Block";
import {Form} from "../definition/model/Form";
import {FormView} from "../definition/theme/view/FormView";
import {useTheme} from "../definition/theme/useTheme";
import {useNavigation} from "../definition/navigation/useNavigation";
import {getElementIndex} from "../definition/ModelUtils";
import {useEventMulticaster} from "../definition/event/service/useEventMulticaster";
import { FormContext } from "../definition/model/FormContext";

export interface FormWrapperProps {
    form: Form,
}

const getBlockState = (index: number, currentIndex: number) => {
    if (index < currentIndex) {
        return BLOCK_STATE.DONE;
    }
    if (index === currentIndex) {
        return BLOCK_STATE.DOING;
    }
    return BLOCK_STATE.TODO;
};

export const FormWrapper: React.FunctionComponent<FormWrapperProps> = ({form}) => {
    const {FormView} = useTheme();
    const eventMulticaster = useEventMulticaster();
    const {currentStep, setCurrentStep} = useNavigation<Block>();
    const currentIndex = getElementIndex(form.blocks, currentStep);

    const onEvent = (event: FormEvent, details: any) => {
        eventMulticaster.event(event, form, details);
    };

    React.useEffect(() => {
        const onBlockEvent = (event: FormEvent, block: Block) => {
            const currentIndex = getElementIndex(form.blocks, block);
            switch (event) {
                case BlockEvents.VALIDATED:
                    if(getElementIndex(form.blocks,block) === form.blocks.length - 1) {
                        eventMulticaster.event(FormEvents.DONE, form);
                    } else {
                        setCurrentStep(form.blocks[currentIndex + 1]);
                    }
                    break;
                case BlockEvents.PREVIOUS:
                    setCurrentStep(form.blocks[currentIndex - 1]);
                    break;
            }
        };
        return eventMulticaster.subscribe(onBlockEvent);
    }, []);

    if(currentIndex === -1) {
        return null;
    }

    return (
        <FormContext.Provider value={form}>
            <FormView onEvent={onEvent}>
                {form.blocks.map((block, index) =>
                    <BlockWrapper key={block.id}
                                  index={index}
                                  block={block}
                                  blockState={getBlockState(index, currentIndex)}/>)}
            </FormView>
        </FormContext.Provider>
    );
};
