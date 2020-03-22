import * as React from "react";

import {BlockViewEvents} from "../../definition/event/events";
import {Cta, CTA_TYPE} from "./common/Cta";
import {BLOCK_STATE} from "../../definition/model/Block";
import {BlockView} from "../../definition/theme/view/BlockView";
import {useBlock} from "../../definition/model/access/useBlock";

import "./DefaultBlockView.scss"

export const DefaultBlockView : BlockView = ({children, index, blockState = BLOCK_STATE.DOING, onEvent}) => {
    const block = useBlock();
    return (
        <div className={`DefaultBlockView app-row ${blockState} ${block!.id}`}>
            <div className="DefaultBlockView-label app-col-12">{index + 1}. {block!.label}</div>
            {blockState !== BLOCK_STATE.DOING ? null : (
                <div className="app-col-12 app-col-sm-8">
                    <div className="DefaultBlockView-content">
                        {children}
                        <div className="app-row">
                            <div className="app-col-12 app-col-sm-3">
                                {index === 0 ?
                                    null : <Cta type={CTA_TYPE.SECONDARY}
                                                className={"DefaultBlockView-previous"}
                                                fullWidth={true}
                                                onClick={() => onEvent!(BlockViewEvents.REQUEST_PREVIOUS)}>Previous</Cta>}
                            </div>
                            <div className="app-col-12 app-col-sm-3 app-offset-sm-6">
                                <Cta fullWidth={true}
                                     className={"DefaultBlockView-next"}
                                     onClick={() => onEvent!(BlockViewEvents.REQUEST_NEXT)}>{block!.ctaLabel || "Next"}</Cta>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

DefaultBlockView.defaultProps = {
    blockState: BLOCK_STATE.DOING,
    index: 0
};