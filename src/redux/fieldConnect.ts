import {setFieldValueAction} from "./actions";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {FieldValueAction} from "./constants";
import {ComponentType} from "react";
import {FieldContextState} from "../definition/FormModel";

export const mapDispatchToProps = (dispatch: Dispatch<FieldValueAction>) => {
    return {
        setFieldValue: (id: string, value: string) => dispatch(setFieldValueAction(id, value)),
    }
};

export const mapStateToProps = (state: FieldContextState) => {
    return {
        fieldContext: state.fieldContext,
    }
};
export const fieldConnect = (Element: ComponentType) => connect(mapStateToProps, mapDispatchToProps)(Element);