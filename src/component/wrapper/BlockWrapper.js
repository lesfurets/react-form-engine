import React from "react";
import PropTypes from "prop-types";

import {FieldWrapper} from "./FieldWrapper";
import BlockContainer from "../container/BlockContainer";
import {fieldConnect} from "../../redux/fieldConnect";
import {VALID} from "../../definition/validation";
import FieldContainer from "../container/FieldContainer";

export const BLOCK_STATE = {
    TODO: "BLOCK-TODO",
    DOING: "BLOCK-DOING",
    DONE: "BLOCK-DONE"
};

export const BLOCK_EVENT = {
    NEXT: "NEXT",
    PREVIOUS: "PREVIOUS",
};

class BlockWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            forceValidation: false
        }
        this.onBlockEvent = this.onBlockEvent.bind(this);
    }

    onBlockEvent(event, index) {
        if(this.props.block.fields
            .map(field => field.getValidation == undefined ? VALID : field.getValidation(this.props.fieldContext))
            .map(validation => validation.isValid)
            .reduce((acc, value) => acc && value)){
            this.props.onBlockEvent(event,index);
        };
        this.setState({forceValidation: true});
    }

    render() {
        let Container = this.props.container;
        return (
            <div className={`block-wrapper ${this.props.blockState} ${this.props.block.id}`}>
                <Container {...this.props} onBlockEvent={this.onBlockEvent}>
                    {this.props.block.fields.map((field, index) =>
                        <FieldWrapper
                            key={index}
                            field={field}
                            tabIndex={index + 1}
                            forceValidation={this.state.forceValidation}
                            View={FieldContainer}
                        />)}
                </Container>
            </div>
        );
    }
}

BlockWrapper.propTypes = {
    blockIndex: PropTypes.number,
    onBlockEvent: PropTypes.func.isRequired,
    blockState: PropTypes.string,
    block: PropTypes.object.isRequired,
    container: PropTypes.func,
};

BlockWrapper.defaultProps = {
    blockState: BLOCK_STATE.DOING,
    container: BlockContainer
};

export default fieldConnect(BlockWrapper);