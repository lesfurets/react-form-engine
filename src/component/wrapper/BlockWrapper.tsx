import * as React from "react";

import {VALID} from "../../definition/validation/Validation";
import {BLOCK_EVENT} from "../../definition/event/events";
import {EVENT_MULTICASTER} from "../../definition/event/EventMulticaster";
import {FormEvent} from "../../definition/event/Event";
import {FieldWrapper} from "./FieldWrapper";
import {fieldConnect, FieldProps} from "../../redux/fieldConnect";
import {Block, BLOCK_STATE} from "../../definition/model/Block";
import {BlockView} from "../../definition/view/BlockView";
import {ViewContext} from "../context/ViewContext";

export interface BlockWrapperProps {
    blockState: BLOCK_STATE,
    block: Block,
}


export interface BlockWrapperState {
    forceValidation: boolean
}

export class BlockWrapperComponent extends React.Component<BlockWrapperProps & FieldProps, BlockWrapperState> {

    static defaultProps = {
        blockState: BLOCK_STATE.DOING,
        hasPrevious: false,
    };

    constructor(props: BlockWrapperProps & FieldProps) {
        super(props);
        this.state = {forceValidation: false};
        this.onEvent = this.onEvent.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate() {
        let {block, fieldContext} = this.props;
        if (block.fields
            .filter(field => field.isVisible === undefined || field.isVisible(fieldContext))
            .map(field => field.getValidation === undefined ? VALID : field.getValidation(fieldContext))
            .map(validation => validation.isValid)
            .reduce((acc, value) => acc && value, true)) {
            EVENT_MULTICASTER.event(BLOCK_EVENT.VALIDATED, block);
        }
        this.setState({forceValidation: true});
    }

    onEvent(event: FormEvent, details: any) {
        EVENT_MULTICASTER.event(event, this.props.block, details);
        if (event === BLOCK_EVENT.NEXT) {
            this.validate();
        }
    }

    render() {
        let {block, blockState} = this.props;
        return (
            <ViewContext.Consumer>
                {({BlockView: BlockView}) => (
                    <BlockView block={block}
                               index={block.index!}
                               blockState={blockState}
                               onEvent={this.onEvent}>
                        {this.props.block.fields.map((field, index) =>
                            <FieldWrapper key={field.id}
                                          field={{...field}}
                                          index={index}
                                          tabIndex={index + 1}
                                          forceValidation={this.state.forceValidation}/>)}
                    </BlockView>
                )}
            </ViewContext.Consumer>
        );
    }
}

export const BlockWrapper = fieldConnect(BlockWrapperComponent);