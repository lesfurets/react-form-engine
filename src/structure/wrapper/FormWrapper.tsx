import * as React from "react";
import {BLOCK_EVENT, FORM_EVENT} from "../../definition/event/events";
import {EVENT_MULTICASTER} from "../../definition/event/EventMulticaster";
import {FormEvent} from "../../definition/event/Event";
import {BlockWrapper} from "./BlockWrapper";
import {Block, BLOCK_STATE} from "../../definition/model/Block";
import {Form} from "../../definition/model/Form";
import {FormView} from "../../definition/view/FormView";
import {ThemeContext} from "../context/ThemeContext";
import {FieldContext} from "../../definition/FieldContext";
import {useTheme} from "../context/useTheme";

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
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const onEvent = (event: FormEvent, details: any) => {
        EVENT_MULTICASTER.event(event, form, details);
    };

    React.useEffect(() => {
        const onBlockEvent = (event: FormEvent, block: Block, fieldContext: FieldContext) => {
            switch (event) {
                case BLOCK_EVENT.VALIDATED:
                    if(block.index! === form.blocks.length - 1) {
                        EVENT_MULTICASTER.event(FORM_EVENT.DONE, form, fieldContext);
                    } else {
                        setCurrentIndex(block.index! + 1);
                    }
                    break;
                case BLOCK_EVENT.PREVIOUS:
                    setCurrentIndex(block.index! - 1);
                    break;
            }
        };
        EVENT_MULTICASTER.subscribeForElements(onBlockEvent, form.blocks);
        return () => EVENT_MULTICASTER.unsubscribe(onBlockEvent);
    }, []);

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
