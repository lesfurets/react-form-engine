import React from "react";
import "../styles/app.less";
import FormEngine from "../../src/index";
import {FieldTypes} from "../../src/definition/FieldTypes";
import {ValidationUtils} from "../../src/definition/ValidationUtils";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import JsonEditor from "./editor/JsonEditor";
import FormEditor from "./editor/FormEditor";


const FIELDS = {
    FIRST_NAME: {
        id: "FIRST_NAME",
        type: FieldTypes.INPUT_TEXT,
        label: "First Name",
        getValidation(context) {
          return ValidationUtils.isDefined(this,context, "The first name is mandatory");
        }
    },
    LAST_NAME: {
        id: "LAST_NAME",
        type: FieldTypes.INPUT_TEXT,
        label: "Last Name",
    },
    EMAIL: {
        id: "EMAIL",
        type: FieldTypes.INPUT_EMAIL,
        label: "Email",
    },
    PHONE: {
        id: "PHONE",
        type: FieldTypes.INPUT_TEXT,
        label: "Phone",
    },
    PASSWORD: {
        id: "PASSWORD",
        type: FieldTypes.INPUT_PASSWORD,
        label: "Enter your password",
    },
    PASSWORD_CONFIRMATION: {
        id: "PASSWORD_CONFIRMATION",
        type: FieldTypes.INPUT_PASSWORD,
        label: "Confirm your password",
        getValidation(context) {
            return ValidationUtils.isDefinedAndEqualTo(this, context, context[FIELDS.PASSWORD.id], "The passwords should be identical.");
        }
    },
    NUMBER: {
        id: "NUMBER",
        type: FieldTypes.INPUT_NUMBER,
        label: "Enter a number",
    },
    AMOUNT: {
        id: "AMOUNT",
        type: FieldTypes.INPUT_NUMBER,
        label: "Enter an amount",
        symbol: "€"
    },
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
        fields: [FIELDS.FIRST_NAME, FIELDS.LAST_NAME]
    },
    CONTACT: {
        id:"CONTACT",
        label: "Contact",
        fields: [FIELDS.EMAIL, FIELDS.PHONE]
    },
    PASSWORD: {
        id:"PASSWORD",
        label: "Password",
        fields: [FIELDS.PASSWORD, FIELDS.PASSWORD_CONFIRMATION],
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
            view: EDITOR_STATE.EDIT_FORM,
            model: Object.values(BLOCKS)
        };
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.onEvent = this.onEvent.bind(this);
    }

    handleTabChange = (event, value) => {
        this.setState({ view: Object.values(EDITOR_STATE)[value] });
    };

    handleModelChange = (value) => {
        this.setState({ model: value });
    };

    onEvent(event, element, details) {
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