import React from "react";
import PropTypes from "prop-types";

import {FieldWrapper} from "./FieldWrapper";
import {fieldConnect} from "../../redux/fieldConnect";
import {VALID} from "../../definition/validation";

export const BLOCK_STATE = {
    TODO: "block-todo",
    DOING: "block-doing",
    DONE: "block-done"
};

export const BLOCK_EVENT = {
    VALID: "VALID",
    PREVIOUS: "PREVIOUS",
};

class BlockWrapperComponent extends React.Component {
    constructor() {
        super();
        this.state = {forceValidation: false};
        this.onBlockEvent = this.onBlockEvent.bind(this);
        this.onValidation = this.onValidation.bind(this);
    }

    onValidation(){
        let {block, fieldContext, onBlockEvent} = this.props;
        if(block.fields
            .map(field => field.hasOwnProperty('getValidation') ? field.getValidation(fieldContext) : VALID)
            .map(validation => validation.isValid)
            .reduce((acc, value) => acc && value)){
            onBlockEvent(BLOCK_EVENT.VALID,block);
        }
        this.setState({forceValidation: true});
    }

    onBlockEvent(event) {
        this.props.onBlockEvent(event,this.props.block);
    }

    render() {
        let {block, blockState, View, FieldView} = this.props;
        return (
            <div className={`BlockWrapper ${this.props.blockState} ${this.props.block.id}`}>
                <View block={block}
                      blockState={blockState}
                      onValidation={this.onValidation}
                      onBlockEvent={this.onBlockEvent}>
                    {this.props.block.fields.map((field, index) =>
                        <FieldWrapper
                            key={index}
                            field={field}
                            tabIndex={index + 1}
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
    onBlockEvent: PropTypes.func.isRequired,
    blockState: PropTypes.string,
    block: PropTypes.object.isRequired,
    View: PropTypes.func.isRequired,
    FieldView: PropTypes.func.isRequired,
};

BlockWrapperComponent.defaultProps = {
    blockState: BLOCK_STATE.DOING,
    hasPrevious: false,
};

export const BlockWrapper = fieldConnect(BlockWrapperComponent);