import * as React from "react";
import {ReactNode} from "react";
import {Block, BLOCK_STATE} from "../../model/Block";
import {FormEvent} from "../../event/Event";

export interface BlockViewProps {
    index: number
    blockState: BLOCK_STATE
    onEvent?: (e: FormEvent, details?: any) => void
}

export type BlockView = React.FunctionComponent<BlockViewProps>;