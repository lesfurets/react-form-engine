import * as React from "react";

import {BLOCK_EVENT} from "../../definition/event/events";
import {EVENT_MULTICASTER} from "../../definition/event/EventMulticaster";
import {FormEvent} from "../../definition/event/Event";
import {BlockWrapper} from "./BlockWrapper";
import {Block, BLOCK_STATE} from "../../definition/model/Block";
import {Form} from "../../definition/model/Form";
import {FieldView} from "../../definition/view/FieldView";
import {BlockView} from "../../definition/view/BlockView";
import {FormView} from "../../definition/view/FormView";

export interface FormWrapperProps {
    form: Form,
    View: FormView,
    BlockView: BlockView,
    FieldView: FieldView,
}

export interface FormWrapperState {
    currentIndex: number
}

export default class FormWrapper extends React.Component<FormWrapperProps, FormWrapperState> {
    constructor(props: FormWrapperProps) {
        super(props);
        this.state = {currentIndex: 0};
        this.onEvent = this.onEvent.bind(this);
        this.onBlockEvent = this.onBlockEvent.bind(this);
    }

    componentWillMount() {
        EVENT_MULTICASTER.subscribeForElements(this.onBlockEvent, this.props.form.blocks);
    }

    componentWillUnmount() {
        EVENT_MULTICASTER.unsubscribe(this.onBlockEvent);
    }

    onBlockEvent(event: FormEvent, block: Block) {
        switch (event) {
            case BLOCK_EVENT.VALIDATED:
                this.setState({currentIndex: block.index + 1});
                break;
            case BLOCK_EVENT.PREVIOUS:
                this.setState({currentIndex: block.index - 1});
                break;
        }
    }

    static getBlockState(index: number, currentIndex: number) {
        if (index < currentIndex) {
            return BLOCK_STATE.DONE;
        }
        if (index === currentIndex) {
            return BLOCK_STATE.DOING;
        }
        return BLOCK_STATE.TODO;
    }

    onEvent(event: FormEvent, details: any) {
        EVENT_MULTICASTER.event(event, this.props.form, details);
    }

    render() {
        let {form, View, BlockView, FieldView} = this.props;
        let {currentIndex} = this.state;
        return (
            <View onEvent={this.onEvent}
                  form={form}>
                {form.blocks.map((block, index) =>
                    <BlockWrapper key={block.id}
                                  block={{...block, index: index}}
                                  blockState={FormWrapper.getBlockState(index, currentIndex)}
                                  View={BlockView}
                                  FieldView={FieldView}/>)}
            </View>
        );
    }
}
