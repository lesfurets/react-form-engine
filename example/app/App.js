import React from "react";
import "../styles/app.less";
import FormEngine from "../../src/index";
import {FieldTypes} from "../../src/definition/FieldTypes";
import {ValidationUtils} from "../../src/definition/validation/ValidationUtils";
import {VisibilityBuilder} from "../../src/dsl/visibility/VisibilityBuilder";
import {ModelExtender} from "../../src/dsl/ModelExtender";
import {ValidationBuilder} from "../../src/dsl/validation/ValidationBuilder";
import {Predicates} from "../../src/dsl/predicate/builder/Predicates";

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
    ALL_FIELDS: {
        id:"ALL_FIELDS",
        label: "All Fields",
        fields: [FIRST_NAME , LAST_NAME , EMAIL , PHONE , PASSWORD , PASSWORD_CONFIRMATION , NUMBER , AMOUNT]
    },
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

const FORM = {
    id: "FORM",
    blocks: Object.values(BLOCKS)
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: ModelExtender.extendModel(FORM)
        };
        this.onEvent = this.onEvent.bind(this);
    }

    onEvent(event, element, details) {
        console.log(event, element, details);
    }

    render() {
        let {model} = this.state;
        return (
            <div className="FormExemple">
                <FormEngine form={model} onEvent={this.onEvent}/>
            </div>
        );
    }
}

export default App;