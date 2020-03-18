import * as React from "react";
import {BlockEvents, BlockViewEvents} from "../definition/event/events";
import {FormEvent} from "../definition/event/Event";
import {FieldWrapper} from "./FieldWrapper";
import {Block, BLOCK_STATE} from "../definition/model/Block";
import {BlockView} from "../definition/theme/view/BlockView";
import {isBlockValid} from "../definition/ModelUtils";
import {useFormData} from "../definition/data/useFormData";
import {useTheme} from "../definition/theme/useTheme";
import {useEventMulticaster} from "../definition/event/service/useEventMulticaster";
import {BlockContext} from "../definition/model/BlockContext";

export interface BlockWrapperProps {
    block: Block,
    blockState?: BLOCK_STATE,
}

export interface BlockWrapperState {
    forceValidation: boolean
}

export const BlockWrapper: React.FunctionComponent<BlockWrapperProps> = ({block, blockState}) => {
    const [fieldContext] = useFormData();
    const {BlockView} = useTheme();
    const eventMulticaster = useEventMulticaster();

    const [forceValidation, setForceValidation] = React.useState(false);

    const validate = () => {
        if (isBlockValid(block, fieldContext)) {
            eventMulticaster.event(BlockEvents.VALIDATED, block, fieldContext);
        }
        setForceValidation(true);
    };

    const onViewEvent = (event: FormEvent, details: any) => {
        eventMulticaster.event(event, block, details);
        switch (event) {
            case BlockViewEvents.REQUEST_NEXT:
                validate();
                break;
            case BlockViewEvents.REQUEST_PREVIOUS:
                eventMulticaster.event(BlockEvents.PREVIOUS, block, details);
                break;
        }
    };

    return (
        <BlockContext.Provider value={block}>
            <BlockView index={block.index!}
                       blockState={blockState!}
                       onEvent={onViewEvent}>
                {block.fields.map((field, index) =>
                    <FieldWrapper key={field.id}
                                  field={field}
                                  index={index}
                                  tabIndex={index + 1}
                                  forceValidation={forceValidation}/>)}
            </BlockView>
        </BlockContext.Provider>
    );
};

BlockWrapper.defaultProps = {
    blockState: BLOCK_STATE.DOING,
};