import React from "react";
import PropTypes from "prop-types";

import {FieldWrapper} from "./FieldWrapper";
import {fieldConnect} from "../../redux/fieldConnect";
import {VALID} from "../../definition/Validation";
import {BLOCK_EVENT} from "../../definition/event/events";
import {EVENT_MULTICASTER} from "../../definition/event/EventMulticaster";

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
        this.validate = this.validate.bind(this);
    }

    validate() {
        let {block, fieldContext} = this.props;
        block.fields
            .filter(field => field.hasOwnProperty("visibility"))
            .forEach(field => console.log(field.visibility.evaluate));
        if (block.fields
            .filter(field => field.visibility === undefined || field.visibility.evaluate(fieldContext))
            .map(field => field.getValidation === undefined ? VALID : field.getValidation(fieldContext))
            .map(validation => validation.isValid)
            .reduce((acc, value) => acc && value, true)) {
            EVENT_MULTICASTER.event(BLOCK_EVENT.VALIDATED, block);
        }
        this.setState({forceValidation: true});
    }

    onEvent(event, details) {
        EVENT_MULTICASTER.event(event, this.props.block, details);
        if (event === BLOCK_EVENT.NEXT) {
            this.validate();
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
                        <FieldWrapper key={field.id}
                                      field={{...field}}
                                      tabIndex={index + 1}
                                      forceValidation={this.state.forceValidation}
                                      View={FieldView}/>)}
                </View>
            </div>
        );
    }
}

BlockWrapperComponent.propTypes = {
    blockIndex: PropTypes.number,
    blockState: PropTypes.string,
    block: PropTypes.object.isRequired,
    fieldContext: PropTypes.object.isRequired,
    View: PropTypes.func.isRequired,
    FieldView: PropTypes.func.isRequired,
};

BlockWrapperComponent.defaultProps = {
    blockState: BLOCK_STATE.DOING,
    hasPrevious: false,
};

export const BlockWrapper = fieldConnect(BlockWrapperComponent);