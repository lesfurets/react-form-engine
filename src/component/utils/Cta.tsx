import * as React from "react";

import "../../styles/components/utils/cta.less"

export enum CTA_TYPE {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

export interface CtaProps {
    type?: CTA_TYPE
    fullWidth?: boolean
    className?: string
    onClick?: () => void
}

export const Cta : React.SFC<CtaProps> = ({children, type, onClick, fullWidth, className}) => (
    <button className={`Cta ${className} ${type} ${fullWidth ? "fullWidth" : ""}`} onClick={onClick}>{children}</button>
);

Cta.defaultProps = {
    type: CTA_TYPE.PRIMARY,
    fullWidth: false,
    className: ""
};