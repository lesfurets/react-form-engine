import * as React from "react";

interface DateElementProps {
    tabIndex: number;
    type: string;
    id: string;
    size: number;
    value: number | undefined;
    onValueChange: (value: number | undefined) => void;
    formatValue: (value: number) => string;
}

export const DateElement: React.FunctionComponent<DateElementProps> =
    ({type, size, id, tabIndex, value, onValueChange, formatValue}) => {
        const [inputValue, setInputValue] = React.useState(() => value ? formatValue(value) : "");
        const [focus, setFocus] = React.useState(false);

        let onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            let numericValue = parseInt(event.target.value);
            if (Number.isInteger(numericValue)) {
                setInputValue(event.target.value);
            } else {
                setInputValue(event.target.value === "" ? "" : inputValue);
            }
        };

        let onBlur = () => {
            setFocus(false);
            if (inputValue !== "") {
                setInputValue(formatValue(parseInt(inputValue)));
            }
        };

        React.useEffect(() => {
            let numericValue = parseInt(inputValue);
            onValueChange(Number.isInteger(numericValue) ? numericValue : undefined);
        }, [parseInt(inputValue)]);

        React.useEffect(() => {
            if (value && formatValue(value) !== inputValue) {
                setInputValue(focus ? value.toString() : formatValue(value));
            } else if (value === undefined) {
                setInputValue("");
            }
        }, [value]);

        return (
            <input className={`DateField-${type.toLowerCase()}`}
                   style={{fontSize: "32px"}}
                   type={"text"}
                   inputMode={"decimal"}
                   name={id}
                   id={id}
                   maxLength={size}
                   size={size}
                   tabIndex={tabIndex}
                   value={(inputValue)}
                   onFocus={() => setFocus(true)}
                   onChange={onChange}
                   onBlur={onBlur}/>
        );
    };