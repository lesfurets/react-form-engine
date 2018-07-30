import React from "react";
import "../styles/app.less";
import FormEngine from "../../src/index";
import {INPUT_TEXT, INPUT_MAIL, INPUT_PASSWORD} from "../../src/definition/field-type";
import {isDefined, isDefinedAndEqualTo, VALID, validate} from "../../src/definition/validation";


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
    }
};

const BLOCKS = {
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
        id:"CONTACT",
        label: "Contact",
        fields: [FIELDS.PASSWORD, FIELDS.PASSWORD_CONFIRMATION]
    }
}


class App extends React.Component {
    render() {
        return (<FormEngine blocks={[BLOCKS.IDENTITY, BLOCKS.CONTACT, BLOCKS.PASSWORD]}/>);
    }
}

export default App;