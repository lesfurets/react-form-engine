import * as React from "react";
import {BLOCK_EVENT} from "../definition/event/events";
import {FormEvent} from "../definition/event/Event";
import {FieldWrapper} from "./FieldWrapper";
import {Block, BLOCK_STATE} from "../definition/model/Block";
import {BlockView} from "../definition/theme/view/BlockView";
import {isBlockValid} from "../definition/ModelUtils";
import {useFieldContext} from "../definition/redux/useFieldContext";
import {useTheme} from "../definition/theme/useTheme";
import {useEvent} from "../definition/event/useEvent";

export interface BlockWrapperProps {
    block: Block,
    blockState?: BLOCK_STATE,
}

export interface BlockWrapperState {
    forceValidation: boolean
}

export const BlockWrapper: React.FunctionComponent<BlockWrapperProps> = ({block, blockState}) => {
    const [fieldContext] = useFieldContext();
    const {BlockView} = useTheme();
    const eventMulticaster = useEvent();

    const [forceValidation, setForceValidation] = React.useState(false);

    const validate = () => {
        if (isBlockValid(block, fieldContext)) {
            eventMulticaster.event(BLOCK_EVENT.VALIDATED, block, fieldContext);
        }
        setForceValidation(true);
    };

    const onEvent = (event: FormEvent, details: any) => {
        eventMulticaster.event(event, block, details);
        if (event === BLOCK_EVENT.NEXT) {
            validate();
        }
    };

    return (
        <BlockView block={block}
                   index={block.index!}
                   blockState={blockState!}
                   onEvent={onEvent}>
            {block.fields.map((field, index) =>
                <FieldWrapper key={field.id}
                              field={{...field}}
                              index={index}
                              tabIndex={index + 1}
                              forceValidation={forceValidation}/>)}
        </BlockView>
    );
};

BlockWrapper.defaultProps = {
    blockState: BLOCK_STATE.DOING,
};