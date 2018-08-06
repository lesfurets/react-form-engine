import React from "react";
import "../styles/app.less";
import FormEngine from "../../src/index";
import {INPUT_TEXT, INPUT_MAIL, INPUT_PASSWORD, INPUT_NUMBER} from "../../src/definition/field-type";
import {isDefined, isDefinedAndEqualTo, VALID, validate} from "../../src/definition/validation";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import JsonEditor from "./JsonEditor";
import FormEditor from "./FormEditor";


const FIELDS = {
    FIRST_NAME: {
        id: "FIRST_NAME",
        type: INPUT_TEXT,
        label: "First Name",
        getValidation(context) {
          return isDefined(this,context, "The first name is mandatory");
        }
    },
    LAST_NAME: {
        id: "LAST_NAME",
        type: INPUT_TEXT,
        label: "Last Name",
    },
    EMAIL: {
        id: "EMAIL",
        type: INPUT_MAIL,
        label: "Email",
    },
    PHONE: {
        id: "PHONE",
        type: INPUT_TEXT,
        label: "Phone",
    },
    PASSWORD: {
        id: "PASSWORD",
        type: INPUT_PASSWORD,
        label: "Enter your password",
    },
    PASSWORD_CONFIRMATION: {
        id: "PASSWORD_CONFIRMATION",
        type: INPUT_PASSWORD,
        label: "Confirm your password",
        getValidation(context) {
            return isDefinedAndEqualTo(this,context, context[FIELDS.PASSWORD.id],"The passwords should be identical.");
        }
    },
    NUMBER: {
        id: "NUMBER",
        type: INPUT_NUMBER,
        label: "Enter a number",
    },
    AMOUNT: {
        id: "AMOUNT",
        type: INPUT_NUMBER,
        label: "Enter an amount",
        symbol: "€"
    },
};

const BLOCKS = {
    ALL_FIELDS: {
        id:"ALL_FIELDS",
        label: "All Fields",
        fields: Object.values(FIELDS)
    },
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
        console.log(value);
        this.setState({ model: value });
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
                {view === EDITOR_STATE.OVERVIEW ? <FormEngine blocks={model} onEvent={this.onEvent}/> : null}
                {view === EDITOR_STATE.EDIT_FORM ? <FormEditor model={model} onChange={this.handleModelChange}/> : null}
                {view === EDITOR_STATE.EDIT_JSON ? <JsonEditor model={model} onChange={this.handleModelChange}/> : null}
            </div>
        );
    }
}

export default App;