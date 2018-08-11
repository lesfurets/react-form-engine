import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/utils/cta.less"

export const CTA_TYPE = {
  PRIMARY: "primary",
  SECONDARY: "secondary"
};

export const Cta = ({children, type, onClick, fullWidth, className}) => (
    <button className={`Cta ${className} ${type} ${fullWidth ? "fullWidth" : ""}`} onClick={onClick}>{children}</button>
);

Cta.propTypes = {
    type: PropTypes.oneOf([CTA_TYPE.PRIMARY,CTA_TYPE.SECONDARY]),
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
};

Cta.defaultProps = {
    type: CTA_TYPE.PRIMARY,
    className: "",
    fullWidth: false
};