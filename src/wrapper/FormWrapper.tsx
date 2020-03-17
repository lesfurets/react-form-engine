import * as React from "react";
import {BLOCK_EVENT, FORM_EVENT} from "../definition/event/events";
import {FormEvent} from "../definition/event/Event";
import {BlockWrapper} from "./BlockWrapper";
import {Block, BLOCK_STATE} from "../definition/model/Block";
import {Form} from "../definition/model/Form";
import {FormView} from "../definition/theme/view/FormView";
import {FieldContext} from "../redux/FieldContext";
import {useTheme} from "../definition/theme/useTheme";
import {useNavigation} from "../definition/redux/useNavigation";
import {getElementIndex} from "../definition/ModelUtils";
import {useEvent} from "../definition/event/useEvent";

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
    const eventMulticaster = useEvent();
    const [navigationTarget, setNavigationTarget] = useNavigation<Block>();
    const currentIndex = getElementIndex(form.blocks, navigationTarget);

    React.useEffect(() => {
        setNavigationTarget(form.blocks[0]);
    }, []);

    const onEvent = (event: FormEvent, details: any) => {
        eventMulticaster.event(event, form, details);
    };

    React.useEffect(() => {
        const onBlockEvent = (event: FormEvent, block: Block, fieldContext: FieldContext) => {
            const currentIndex = getElementIndex(form.blocks, block);
            switch (event) {
                case BLOCK_EVENT.VALIDATED:
                    if(block.index! === form.blocks.length - 1) {
                        eventMulticaster.event(FORM_EVENT.DONE, form, fieldContext);
                    } else {
                        setNavigationTarget(form.blocks[currentIndex + 1]);
                    }
                    break;
                case BLOCK_EVENT.PREVIOUS:
                    setNavigationTarget(form.blocks[currentIndex - 1]);
                    break;
            }
        };
        return eventMulticaster.subscribe(onBlockEvent);
    }, []);

    if(currentIndex === -1) {
        return null;
    }

    return (
        <FormView onEvent={onEvent}
                  form={form}>
            {form.blocks.map((block, index) =>
                <BlockWrapper key={block.id}
                              block={{...block, index: index}}
                              blockState={getBlockState(index, currentIndex)}/>)}
        </FormView>
    );
};
