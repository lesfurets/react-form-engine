import React from "react";
import "../styles/app.less";
import FormEngine from "../../src/component/FormEngineWrapper";
import {INPUT_TEXT, INPUT_MAIL} from "../../src/definition/field-type";


const fields = [
    {
        id: "FIRST_NAME",
        label: "Prénom :",
        type: INPUT_TEXT
    },
    {
        id: "LAST_NAME",
        label: "Nom :",
        type: INPUT_TEXT
    },
    {
        id: "FIELD_2",
        label: "Email :",
        type: INPUT_MAIL
    },
]



class App extends React.Component {
    render() {
        return (<FormEngine fields={fields} />);
    }
}

export default App;