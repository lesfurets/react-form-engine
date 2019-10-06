import * as React from "react";
import {BLOCK_EVENT} from "../../definition/event/events";
import {EVENT_MULTICASTER} from "../../definition/event/EventMulticaster";
import {FormEvent} from "../../definition/event/Event";
import {FieldWrapper} from "./FieldWrapper";
import {fieldConnect, FieldProps} from "../../redux/fieldConnect";
import {Block, BLOCK_STATE} from "../../definition/model/Block";
import {BlockView} from "../../definition/view/BlockView";
import {ThemeContext} from "../context/ThemeContext";
import {isBlockValid} from "../../definition/ModelUtils";

export interface BlockWrapperProps {
    block: Block,
    blockState?: BLOCK_STATE,
}

export interface BlockWrapperState {
    forceValidation: boolean
}

export const BlockWrapperComponent: React.FunctionComponent<BlockWrapperProps & FieldProps> =
    ({block, blockState, fieldContext}) => {

        const [forceValidation, setForceValidation] = React.useState(false);

        const validate = () => {
            if (isBlockValid(block, fieldContext)) {
                EVENT_MULTICASTER.event(BLOCK_EVENT.VALIDATED, block, fieldContext);
            }
            setForceValidation(true);
        };

        const onEvent = (event: FormEvent, details: any) => {
            EVENT_MULTICASTER.event(event, block, details);
            if (event === BLOCK_EVENT.NEXT) {
                validate();
            }
        }

        return (
            <ThemeContext.Consumer>
                {({BlockView: BlockView}) => (
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
                )}
            </ThemeContext.Consumer>
        );
    };

BlockWrapperComponent.defaultProps = {
    blockState: BLOCK_STATE.DOING,
};

export const BlockWrapper = fieldConnect(BlockWrapperComponent);