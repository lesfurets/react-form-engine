import React from "react";
import "../styles/app.less";
import FormEngine from "../../src/index";
import {INPUT_TEXT, INPUT_MAIL} from "../../src/definition/field-type";
import {isDefined, VALID, validate} from "../../src/definition/validation";


const FIELDS = {
    FIRST_NAME: {
        id: "FIRST_NAME",
        label: "Prénom",
        type: INPUT_TEXT,
        getValidation(context) {
          return isDefined(this,context, "The first name is mandatory");
        }
    },
    LAST_NAME: {
        id: "LAST_NAME",
        label: "Nom",
        type: INPUT_TEXT
    },
    EMAIL: {
        id: "EMAIL",
        label: "Email",
        type: INPUT_MAIL
    },
    PHONE: {
        id: "PHONE",
        label: "Phone",
        type: INPUT_TEXT
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
    }
}


class App extends React.Component {
    render() {
        return (<FormEngine blocks={[BLOCKS.IDENTITY, BLOCKS.CONTACT]}/>);
    }
}

export default App;