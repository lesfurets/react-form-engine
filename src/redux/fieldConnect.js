import {setFieldValueAction} from "./actions";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        setFieldValue: (id, value) => dispatch(setFieldValueAction(id, value)),
    }
};

const mapStateToProps = (state) => {
    return {
        fieldContext: state.fieldContext,
    }
};

export const fieldConnect = (Element) => connect(mapStateToProps, mapDispatchToProps)(Element);