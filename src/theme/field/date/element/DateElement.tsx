import * as React from "react";

export interface DateElementProps {
    tabIndex: number;
    type: string;
    id: string;
    size: number;
    value: number | undefined;
    onValueChange: (type: string, value: number | undefined) => void;
    onReset: (type: string) => void;
    formatValue: (value: number) => string;
    forceFocus: boolean;
}

export const DateElement: React.FunctionComponent<DateElementProps> =
    ({type, size, id, tabIndex, value, onValueChange, onReset, formatValue, forceFocus}) => {
        const [inputValue, setInputValue] = React.useState(() => value ? formatValue(value) : "");
        const [focus, setFocus] = React.useState(false);
        const inputRef = React.useRef<HTMLInputElement>(null);

        const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            let numericValue = parseInt(event.target.value);
            if (Number.isInteger(numericValue)) {
                setInputValue(event.target.value);
            } else if (event.target.value === "") {
                setInputValue( "");
            } else {
                setInputValue( inputValue);
            }
        };

        React.useEffect(() => {
            if(forceFocus) {
                inputRef.current!.focus();
            }
        }, [forceFocus]);


        const onBlur = () => {
            setFocus(false);
            if (inputValue !== "") {
                setInputValue(formatValue(parseInt(inputValue)));
            }
        };

        const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if(event.key === 'Backspace' && inputValue === ""){
                onReset(type);
            }
        };

        React.useEffect(() => {
            if(inputValue.length === size) {
                onValueChange(type, parseInt(inputValue));

            } else if (inputValue.length === 0) {
                onValueChange(type, undefined);
            }
        }, [parseInt(inputValue)]);

        React.useEffect(() => {
            if (value && formatValue(value) !== inputValue) {
                setInputValue(focus ? value.toString() : formatValue(value));
            } else if (value === undefined) {
                setInputValue("");
            }
        }, [value]);

        return (
            <input ref={inputRef}
                   className={`DateField-${type.toLowerCase()}`}
                   type={"text"}
                   inputMode={"decimal"}
                   style={{textAlign: focus ? "left" : "center"}}
                   name={id}
                   id={id}
                   maxLength={size}
                   size={size}
                   tabIndex={tabIndex}
                   value={inputValue}
                   onFocus={() => setFocus(true)}
                   onKeyDown={handleKeyDown}
                   onChange={onChange}
                   onBlur={onBlur}/>
        );
    };