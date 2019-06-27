import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import "../styles/app.less";
import FormEngine from "../../src/index";
import {FieldTypes} from "../../src/definition/FieldTypes";
import {ValidationUtils} from "../../src/definition/validation/ValidationUtils";
import {VisibilityBuilder} from "../../src/dsl/visibility/VisibilityBuilder";
import {ModelExtender} from "../../src/dsl/ModelExtender";
import {ValidationBuilder} from "../../src/dsl/validation/ValidationBuilder";
import {Predicates} from "../../src/dsl/predicate/builder/Predicates";
import JsonEditor from "./editor/JsonEditor";
import {FormEditor} from "./editor/FormEditor";

const FIRST_NAME = {
    id: "FIRST_NAME",
    type: FieldTypes.INPUT_TEXT,
    label: "First Name",
    validationRule: ValidationBuilder.error("The first name is mandatory").when(Predicates.self.isNot.aString.startingWith("azer"))
};

const LAST_NAME = {
    id: "LAST_NAME",
    type: FieldTypes.INPUT_TEXT,
    label: "Last Name",
    visibilityRule: VisibilityBuilder.isNotVisible.when(Predicates.field(FIRST_NAME).isNot.defined())
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
    visibilityRule: VisibilityBuilder.isNotVisible.when(Predicates.field(FIRST_NAME).isNot.defined()),
    getValidation(context) {
        return ValidationUtils.isDefinedAndEqualTo(this, context, context[PASSWORD.id], "The passwords should be identical.");
    }
};

const TEXT = {
    id: "TEXT",
    type: FieldTypes.INPUT_TEXT,
    label: "Enter a text"
};

const NUMBER = {
    id: "NUMBER",
    type: FieldTypes.INPUT_INTEGER,
    label: "Enter a number",
};

const AMOUNT = {
    id: "AMOUNT",
    type: FieldTypes.INPUT_DECIMAL,
    label: "Enter an amount",
    symbol: "€"
};

const TEXT_AREA = {
    id: "TEXT_AREA",
    type: FieldTypes.INPUT_TEXT_AREA,
    label: "Enter a paragraph",
};

let SELECT_VALUES = [
    {id: "value1", label: "Value 1"},
    {id: "value2", label: "Value 2"},
    {id: "value3", label: "Value 3"},
    {id: "value4", label: "Value 4"},
];

const SELECT = {
    id: "SELECT",
    type: FieldTypes.INPUT_SELECT,
    label: "Make your choice",
    values: SELECT_VALUES
};

const RADIO = {
    id: "RADIO",
    type: FieldTypes.INPUT_RADIO,
    label: "Make your choice",
    values: SELECT_VALUES
};

const CHECKBOX = {
    id: "CHECKBOX",
    type: FieldTypes.INPUT_CHECKBOX,
    label: "Select a radio",
    values: SELECT_VALUES
};

const BLOCKS = {
    // ALL_FIELDS: {
    //     id:"ALL_FIELDS",
    //     label: "All Fields",
    //     fields: [TEXT, PASSWORD , NUMBER , AMOUNT, TEXT_AREA, SELECT, RADIO, CHECKBOX]
    // },
    BLK_IDENTITY: {
        id:"BLK_IDENTITY",
        label: "Personal information",
        fields: [FIRST_NAME, LAST_NAME]
    },
    BLK_CONTACT: {
        id:"BLK_CONTACT",
        label: "Contact",
        fields: [EMAIL, PHONE]
    },
    BLK_PASSWORD: {
        id:"BLK_PASSWORD",
        label: "Password",
        fields: [PASSWORD, PASSWORD_CONFIRMATION],
        ctaLabel: "Submit"
    }
};

const FORM = {
    id: "FORM",
    blocks: Object.values(BLOCKS)
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
            model: ModelExtender.extendModel(FORM)
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
                {view === EDITOR_STATE.EDIT_FORM ? <FormEditor form={model} onChange={this.handleModelChange}/> : null}
                {view === EDITOR_STATE.EDIT_JSON ? <JsonEditor form={model} onChange={this.handleModelChange}/> : null}
            </div>
        );
    }
}

export default App;