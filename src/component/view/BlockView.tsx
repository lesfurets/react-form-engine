import * as React from "react";

import {BLOCK_EVENT} from "../../definition/event/events";
import {Cta, CTA_TYPE} from "../utils/Cta";

import "../../styles/components/view/block-view.less"
import {Block, BLOCK_STATE} from "../../definition/FormModel";
import {ReactNode} from "react";
import {FormEvent} from "../../definition/event/Event";

export interface BlockViewProps {
    children? : ReactNode
    block? : Block
    index : number
    blockState: BLOCK_STATE
    onEvent?: (e : FormEvent) => {}
}

export const BlockView : React.SFC<BlockViewProps> = ({children, block, index, blockState, onEvent}) => (
    <div className={`BlockView app-row ${blockState} ${block!.id}`}>
        <div className="BlockView-label app-col-xs-12">{index + 1}. {block!.label}</div>
        {blockState !== BLOCK_STATE.DOING ? null : (
            <div className="app-col-xs-12 app-col-sm-8">
                <div className="BlockView-content">
                    {children}
                    <div className="app-row">
                        <div className="app-col-xs-12 app-col-sm-3">
                            {index === 0 ?
                                null : <Cta type={CTA_TYPE.SECONDARY}
                                            className={"BlockView-previous"}
                                            fullWidth={true}
                                            onClick={() => onEvent!(BLOCK_EVENT.PREVIOUS)}>Previous</Cta>}
                        </div>
                        <div className="app-col-xs-12 app-col-sm-3 app-col-sm-offset-6">
                            <Cta fullWidth={true}
                                 className={"BlockView-next"}
                                 onClick={() => onEvent!(BLOCK_EVENT.NEXT)}>{block!.ctaLabel || "Next"}</Cta>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
);

BlockView.defaultProps = {
    blockState: BLOCK_STATE.DOING,
    index: 1
};