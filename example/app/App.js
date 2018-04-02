import React from "react";
import "../styles/app.less";
import FormEngine from "../../src/container/FormEngineWrapper";
import {INPUT_TEXT} from "../../src/definition/field-type";


const fields = [
    {
        id: "TEXT_FIELD_1",
        type: INPUT_TEXT
    },
    {
        id: "TEXT_FIELD_2",
        type: INPUT_TEXT
    },
]



class App extends React.Component {
    render() {
        return (<FormEngine fields={fields} />);
    }
}

export default App;