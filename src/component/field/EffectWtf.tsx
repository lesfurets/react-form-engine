import * as React from "react";
import {FieldComponent, FieldComponentProps} from "../../definition/component/FieldComponent";
import {FIELD_EVENT} from "../../definition/event/events";

interface EffectWtfProps {
    callback: () => {}
}

let renderCount = 1;
let effectCount = 1;
let clickCount = 1;

export const EffectWtf: React.FunctionComponent<EffectWtfProps> = (props: EffectWtfProps) => {
    const [toggle, setToggle] = React.useState(false);

    React.useEffect(() => {
        console.log("Effect", effectCount++);
        props.callback();
    });

    console.log("Render", renderCount++);

    let onClick = () => {
        console.log("Click", clickCount++);
        setToggle(!toggle);
    };

    return (
        <div className={`EffectWtf ${toggle ? "toggled" : ""}`} onClick={onClick}/>
    );
};