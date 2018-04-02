import React from "react";
import "../styles/app.less";
import FormEngine from "../../src/container/FormEngineWrapper";
import {INPUT_TEXT, INPUT_MAIL} from "../../src/definition/field-type";


const fields = [
    {
        id: "FIELD_1",
        type: INPUT_TEXT
    },
    {
        id: "FIELD_2",
        type: INPUT_MAIL
    },
]



class App extends React.Component {
    render() {
        return (<FormEngine fields={fields} />);
    }
}

export default App;