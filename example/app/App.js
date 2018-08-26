import React from "react";
import "../styles/app.less";
import FormEngine from "../../src/index";
import {FieldTypes} from "../../src/definition/FieldTypes";
import {ValidationBuilder, ValidationUtils} from "../../src/definition/validation/ValidationUtils";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import JsonEditor from "./editor/JsonEditor";
import FormEditor from "./editor/FormEditor";
import {VisibilityBuilder} from "../../src/definition/visibility/VisibilityUtils";
import {Predicates} from "../../src/definition/predicate/Predicates";
import {ModelExtender} from "../../src/definition/ModelExtender";

const FIRST_NAME = {
    id: "FIRST_NAME",
    type: FieldTypes.INPUT_TEXT,
    label: "First Name",
    validationRule: ValidationBuilder.error("The first name is mandatory2").when(Predicates.self().isNot().defined())
};

const LAST_NAME = {
    id: "LAST_NAME",
    type: FieldTypes.INPUT_TEXT,
    label: "Last Name",
    visibilityRule: VisibilityBuilder.isNotVisible().when(Predicates.field(FIRST_NAME.id).isNot().defined())
};

const EMAIL = {
    id: "EMAIL",
    type: FieldTypes.INPUT_EMAIL,
    label: "Email",
};

const PHONE = {
    id: "PHONE",
    type: FieldTypes.INPUT_TEXT,
    label: "Phone",
};

const PASSWORD = {
    id: "PASSWORD",
    type: FieldTypes.INPUT_PASSWORD,
    label: "Enter your password",
};

const PASSWORD_CONFIRMATION = {
    id: "PASSWORD_CONFIRMATION",
    type: FieldTypes.INPUT_PASSWORD,
    label: "Confirm your password",
    visibilityRule: VisibilityBuilder.isNotVisible().when(Predicates.field(FIRST_NAME.id).isNot().defined()),
    getValidation(context) {
        return ValidationUtils.isDefinedAndEqualTo(this, context, context[PASSWORD.id], "The passwords should be identical.");
    }
};

const NUMBER = {
    id: "NUMBER",
    type: FieldTypes.INPUT_NUMBER,
    label: "Enter a number",
};

const AMOUNT = {
    id: "AMOUNT",
    type: FieldTypes.INPUT_NUMBER,
    label: "Enter an amount",
    symbol: "€"
};

const BLOCKS = {
    // ALL_FIELDS: {
    //     id:"ALL_FIELDS",
    //     label: "All Fields",
    //     fields: Object.values(FIELDS)
    // },
    IDENTITY: {
        id:"IDENTITY",
        label: "Personal information",
        fields: [FIRST_NAME, LAST_NAME]
    },
    CONTACT: {
        id:"CONTACT",
        label: "Contact",
        fields: [EMAIL, PHONE]
    },
    PASSWORD: {
        id:"PASSWORD",
        label: "Password",
        fields: [PASSWORD, PASSWORD_CONFIRMATION],
        ctaLabel: "Submit"
    }
};

const EDITOR_STATE = {
    OVERVIEW: {id: "OVERVIEW", label: "Overview"},
    EDIT_FORM: {id: "EDIT_FORM", label: "Edit"},
    EDIT_JSON: {id: "EDIT_JSON", label: "As Json"},
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: EDITOR_STATE.OVERVIEW,
            model: ModelExtender.extendModel(Object.values(BLOCKS))
        };
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.onEvent = this.onEvent.bind(this);
    }

    handleTabChange = (event, value) => {
        this.setState({ view: Object.values(EDITOR_STATE)[value] });
    };

    handleModelChange = (value) => {
        console.log(value);
        this.setState({ model: ModelExtender.extendModel(value) });
    };

    onEvent(event, element, details) {
        console.log(event, element, details);
    }

    render() {
        let {view, model} = this.state;
        return (
            <div className="FormExemple">
                <AppBar position="sticky" color="default">
                    <Tabs value={Object.values(EDITOR_STATE).indexOf(view)}
                          onChange={this.handleTabChange}
                          indicatorColor="primary"
                          textColor="primary" centered>
                        {Object.values(EDITOR_STATE).map(value => <Tab key={value.id} label={value.label} />)}
                    </Tabs>
                </AppBar>
                {view === EDITOR_STATE.OVERVIEW ? <FormEngine form={model} onEvent={this.onEvent}/> : null}
                {view === EDITOR_STATE.EDIT_FORM ? <FormEditor model={model} onChange={this.handleModelChange}/> : null}
                {view === EDITOR_STATE.EDIT_JSON ? <JsonEditor model={model} onChange={this.handleModelChange}/> : null}
            </div>
        );
    }
}

export default App;