import React from "react";
import PropTypes from "prop-types";

import {FieldWrapper} from "./FieldWrapper";
import {fieldConnect} from "../../redux/fieldConnect";
import {VALID} from "../../definition/validation";

export const BLOCK_STATE = {
    TODO: "BLOCK-TODO",
    DOING: "BLOCK-DOING",
    DONE: "BLOCK-DONE"
};

export const BLOCK_EVENT = {
    VALID: "VALID",
    PREVIOUS: "PREVIOUS",
};

class BlockWrapper extends React.Component {
    constructor() {
        super();
        this.state = {forceValidation: false};
        this.onBlockEvent = this.onBlockEvent.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate(){
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
                      validate={this.validate}
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

BlockWrapper.propTypes = {
    blockIndex: PropTypes.number,
    onBlockEvent: PropTypes.func.isRequired,
    blockState: PropTypes.string,
    block: PropTypes.object.isRequired,
    View: PropTypes.func.isRequired,
    FieldView: PropTypes.func.isRequired,
};

BlockWrapper.defaultProps = {
    blockState: BLOCK_STATE.DOING,
    hasPrevious: false,
};

export default fieldConnect(BlockWrapper);