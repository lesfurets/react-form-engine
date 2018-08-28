import React from "react";
import PropTypes from "prop-types";

import {BLOCK_STATE} from "../wrapper/BlockWrapper";
import {BLOCK_EVENT} from "../../definition/event/events";
import {Cta, CTA_TYPE} from "../utils/Cta";

import "../../styles/components/view/block-view.less"

export const BlockView = ({children, block, blockState, onEvent}) => (
    <div className={`BlockView app-row ${blockState} ${block.id}`}>
        <div className="BlockView-label app-col-xs-12">{block.index + 1}. {block.label}</div>
        {blockState !== BLOCK_STATE.DOING ? null : (
            <div className="app-col-xs-12 app-col-sm-8">
                <div className="BlockView-content">
                    {children}
                    <div className="app-row">
                        <div className="app-col-xs-12 app-col-sm-3">
                            {block.index === 0 ?
                                null : <Cta type={CTA_TYPE.SECONDARY}
                                            className={"BlockView-previous"}
                                            fullWidth={true}
                                            onClick={() => onEvent(BLOCK_EVENT.PREVIOUS)}>Previous</Cta>}
                        </div>
                        <div className="app-col-xs-12 app-col-sm-3 app-col-sm-offset-6">
                            <Cta fullWidth={true}
                                 className={"BlockView-next"}
                                 onClick={() => onEvent(BLOCK_EVENT.NEXT)}>{block.ctaLabel || "Next"}</Cta>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
);

BlockView.propTypes = {
    block: PropTypes.shape({
        index: PropTypes.number,
        label: PropTypes.string,
        ctaLabel: PropTypes.string,
    }).isRequired,
    blockState: PropTypes.string.isRequired,
    onEvent: PropTypes.func
};

BlockView.defaultProps = {
    blockState: BLOCK_STATE.DOING
};