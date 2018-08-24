import React from "react";
import PropTypes from "prop-types";

import {FieldWrapper} from "./FieldWrapper";
import {fieldConnect} from "../../redux/fieldConnect";
import {VALID} from "../../definition/Validation";
import {EMPTY_CALLBACK} from "../../definition/props-utils";
import {BLOCK_EVENT} from "../../definition/event/events";

export const BLOCK_STATE = {
    TODO: "block-todo",
    DOING: "block-doing",
    DONE: "block-done"
};

export class BlockWrapperComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {forceValidation: false};
        this.onEvent = this.onEvent.bind(this);
        this.onFieldEvent = this.onFieldEvent.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate(){
        let {block, fieldContext, onEvent} = this.props;
        if(block.fields
            .map(field => field.hasOwnProperty('getValidation') ? field.getValidation(fieldContext) : VALID)
            .map(validation => validation.isValid)
            .reduce((acc, value) => acc && value, true)){
            onEvent(BLOCK_EVENT.NEXT,block);
        }
        this.setState({forceValidation: true});
    }

    onFieldEvent(event, element, details) {
        this.props.onEvent(event, element, details);
    }

    onEvent(event, details) {
        if(event === BLOCK_EVENT.NEXT) {
            this.validate();
        } else {
            this.props.onEvent(event, this.props.block, details);
        }
    }

    render() {
        let {block, blockState, View, FieldView} = this.props;
        return (
            <div className={`BlockWrapper ${this.props.blockState} ${this.props.block.id}`}>
                <View block={block}
                      blockState={blockState}
                      onEvent={this.onEvent}>
                    {this.props.block.fields.map((field, index) =>
                        <FieldWrapper
                            key={field.id}
                            field={{...field}}
                            tabIndex={index + 1}
                            onEvent={this.onFieldEvent}
                            forceValidation={this.state.forceValidation}
                            View={FieldView}
                        />)}
                </View>
            </div>
        );
    }
}

BlockWrapperComponent.propTypes = {
    blockIndex: PropTypes.number,
    onEvent: PropTypes.func,
    blockState: PropTypes.string,
    block: PropTypes.object.isRequired,
    fieldContext: PropTypes.object.isRequired,
    View: PropTypes.func.isRequired,
    FieldView: PropTypes.func.isRequired,
};

BlockWrapperComponent.defaultProps = {
    blockState: BLOCK_STATE.DOING,
    onEvent: EMPTY_CALLBACK,
    hasPrevious: false,
};

export const BlockWrapper = fieldConnect(BlockWrapperComponent);