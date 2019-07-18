import * as React from "react";
import {FieldComponent, FieldComponentProps} from "../../definition/component/FieldComponent";
import {FIELD_EVENT} from "../../definition/event/events";

const DateInfo = {
    DAY: "DAY",
    MONTH: "MONTH",
    YEAR: "YEAR"
};

interface UnstableDate {
    [key: string] : string
}

const isRealDate = (date: UnstableDate) => {
    let year = date[DateInfo.YEAR];
    let month = date[DateInfo.MONTH];
    let day = date[DateInfo.DAY];

    return year !== undefined && month !== undefined && day !== undefined
        && year.length === 4 && month.length === 2 && day.length === 2;
};

const parseDate = (date: UnstableDate) => {
    return new Date(parseInt(date[DateInfo.YEAR]),parseInt(date[DateInfo.MONTH])-1,parseInt(date[DateInfo.DAY]));
};

export const DateField: FieldComponent<Date> =
    ({field, tabIndex, contextValue, onFieldEvent}: FieldComponentProps<Date>) => {
        const [unstable, setUnstable] = React.useState<UnstableDate>({});

        React.useEffect(() => {
        }, [unstable]);

        React.useEffect(() => {
            let isDate = isRealDate(unstable);
            if (contextValue && !isDate) {
                onFieldEvent!(FIELD_EVENT.RESET_VALUE)
            } else if(isDate){
                onFieldEvent!(FIELD_EVENT.UPDATE_VALUE, parseDate(unstable));
            }
        }, [unstable]);

        let onChange = (key: string, value: string) => {
            let numericValue = parseInt(value);
            if(Number.isInteger(numericValue)){
                setUnstable({...unstable, [key]: value});
            }
        };

        return (
            <div className="DateField-container">
                <input className="DateField-day"
                       type={"text"}
                       inputMode={"decimal"}
                       placeholder={field!.placeholder || ""}
                       name={`${field!.id}-day`}
                       id={`${field!.id}-day`}
                       maxLength={2}
                       size={2}
                       tabIndex={tabIndex}
                       value={unstable[DateInfo.DAY] || (contextValue ? contextValue.getDate().toString() : "")}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(DateInfo.DAY, event.target.value)}
                       onBlur={() => onChange(DateInfo.DAY, unstable[DateInfo.DAY].padStart(2, '0'))}/>
                <span className="DateField-separator">/</span>
                <input className="DateField-month"
                       type={"text"}
                       inputMode={"decimal"}
                       placeholder={field!.placeholder || ""}
                       name={`${field!.id}-month`}
                       id={`${field!.id}-month`}
                       maxLength={2}
                       size={2}
                       tabIndex={tabIndex}
                       value={unstable[DateInfo.MONTH] || (contextValue ? (contextValue.getMonth() + 1).toString() : "")}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(DateInfo.MONTH, event.target.value)}
                       onBlur={() => onChange(DateInfo.MONTH, unstable[DateInfo.MONTH].padStart(2, '0'))}/>
                <span className="DateField-separator">/</span>
                <input className="DateField-year"
                       type={"text"}
                       inputMode={"decimal"}
                       placeholder={field!.placeholder || ""}
                       name={`${field!.id}-year`}
                       id={`${field!.id}-year`}
                       maxLength={4}
                       size={4}
                       tabIndex={tabIndex}
                       value={unstable[DateInfo.YEAR] || (contextValue ? contextValue.getFullYear().toString() : "")}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(DateInfo.YEAR, event.target.value)}
                       onBlur={() => {}}/>
            </div>
        );
    };