import React from "react";
import {BLOCK_STATE, BlockWrapper} from "./BlockWrapper";
import PropTypes from "prop-types";
import {BLOCK_EVENT} from "../../definition/event/events";
import {EVENT_MULTICASTER} from "../../definition/event/EventMulticaster";

export default class FormWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentIndex: 0};
        this.onEvent = this.onEvent.bind(this);
        this.onBlockEvent = this.onBlockEvent.bind(this);
    }

    componentWillMount() {
        EVENT_MULTICASTER.subscribeForElements(this.onBlockEvent, this.props.form);
    }

    componentWillUnmount() {
        EVENT_MULTICASTER.unsubscribe(this.onBlockEvent);
    }

    onBlockEvent(event, block) {
        switch (event) {
            case BLOCK_EVENT.VALIDATED:
                this.setState({currentIndex: block.index + 1});
                break;
            case BLOCK_EVENT.PREVIOUS:
                this.setState({currentIndex: block.index - 1});
                break;
        }
    }

    static getBlockState(index, currentIndex) {
        if (index < currentIndex) {
            return BLOCK_STATE.DONE;
        }
        if (index === currentIndex) {
            return BLOCK_STATE.DOING;
        }
        return BLOCK_STATE.TODO;
    }

    onEvent(event, details) {
        EVENT_MULTICASTER.event(event, this.props.form, details);
    }

    render() {
        let {form, View, BlockView, FieldView} = this.props;
        let {currentIndex} = this.state;
        return (
            <div className="FormWrapper">
                <View onEvent={this.onEvent}>
                    {form.map((block, index) =>
                        <BlockWrapper
                            key={block.id}
                            block={{...block, index:index}}
                            blockState={FormWrapper.getBlockState(index, currentIndex)}
                            View={BlockView}
                            FieldView={FieldView}
                        />)}
                </View>
            </div>
        );
    }
}

FormWrapper.propTypes = {
    form: PropTypes.array.isRequired,
    FormView: PropTypes.func.isRequired,
    BlockView: PropTypes.func.isRequired,
    FieldView: PropTypes.func.isRequired,
};