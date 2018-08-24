import React from "react";
import {BLOCK_STATE} from "./BlockWrapper";
import {BlockWrapper} from "./BlockWrapper";
import PropTypes from "prop-types";
import {EMPTY_CALLBACK} from "../../definition/props-utils";
import {BLOCK_EVENT} from "../../definition/event/events";

export default class FormWrapper extends React.Component {
    constructor() {
        super();
        this.state = {currentBlockIndex: 0};
        this.getBlockState = this.getBlockState.bind(this);
        this.onBlockEvent = this.onBlockEvent.bind(this);
        this.onEvent = this.onEvent.bind(this);
    }

    getBlockState(index) {
        if (index < this.state.currentBlockIndex) {
            return BLOCK_STATE.DONE;
        }
        if (index === this.state.currentBlockIndex) {
            return BLOCK_STATE.DOING;
        }
        return BLOCK_STATE.TODO;
    }

    onBlockEvent(event, block, details) {
        switch (event) {
            case BLOCK_EVENT.NEXT:
                this.setState({currentBlockIndex: block.index + 1});
                break;
            case BLOCK_EVENT.PREVIOUS:
                this.setState({currentBlockIndex: block.index - 1});
                break;
        }
        this.props.onEvent(event, block, details);
    }

    onEvent(event, details) {
        this.props.onEvent(event, this.props.form, details);
    }

    render() {
        let {form, View, BlockView, FieldView} = this.props;
        return (
            <div className="FormWrapper">
                <View onEvent={this.onEvent}>
                    {form.map((block, index) =>
                        <BlockWrapper
                            key={block.id}
                            block={{...block, index:index}}
                            blockState={this.getBlockState(index)}
                            onEvent={this.onBlockEvent}
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
    onEvent: PropTypes.func,
    FormView: PropTypes.func.isRequired,
    BlockView: PropTypes.func.isRequired,
    FieldView: PropTypes.func.isRequired,
};

FormWrapper.defaultProps = {
    onEvent: EMPTY_CALLBACK
};