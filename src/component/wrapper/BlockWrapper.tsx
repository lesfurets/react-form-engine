import * as React from "react";

import {VALID} from "../../definition/validation/Validation";
import {BLOCK_EVENT} from "../../definition/event/events";
import {EVENT_MULTICASTER} from "../../definition/event/EventMulticaster";
import {FormEvent} from "../../definition/event/Event";
import {FieldWrapper} from "./FieldWrapper";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {FieldValueAction} from "../../redux/constants";
import {setFieldValueAction} from "../../redux/actions";
import {FieldProps} from "../../redux/fieldConnect";
import {FieldState} from "../../redux/reducers";
import {Block, BLOCK_STATE} from "../../definition/model/Block";
import {FieldView} from "../../definition/view/FieldView";
import {BlockView} from "../../definition/view/BlockView";

export interface BlockWrapperProps {
    blockState: BLOCK_STATE,
    block: Block,
    View: BlockView,
    FieldView: FieldView,
    // fieldContext: FieldContext,
    // setFieldValue: (id: string, value: string) => void
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
        let {block, blockState, View, FieldView} = this.props;
        return (
            <View block={block}
                  index={block.index}
                  blockState={blockState}
                  onEvent={this.onEvent}>
                {this.props.block.fields.map((field, index) =>
                    <FieldWrapper key={field.id}
                                  field={{...field}}
                                  tabIndex={index + 1}
                                  forceValidation={this.state.forceValidation}
                                  View={FieldView}/>)}
            </View>
        );
    }
}


const mapStateToProps = (state: FieldState, ownProps: BlockWrapperProps) => {
    return {
        ...ownProps,
        fieldContext: state.fieldContext,
    }
};

const mapDispatchToProps = (dispatch: Dispatch<FieldValueAction>, ownProps: BlockWrapperProps) => {
    return {
        ... ownProps,
        setFieldValue: (id: string, value: string) => dispatch(setFieldValueAction(id, value)),
    }
};

export const BlockWrapper = connect(mapStateToProps, mapDispatchToProps)(BlockWrapperComponent);