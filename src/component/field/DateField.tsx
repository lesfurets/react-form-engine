import * as React from "react";
import {FieldComponent, FieldComponentProps} from "../../definition/component/FieldComponent";
import {FIELD_EVENT} from "../../definition/event/events";
import {DateElement} from "./element/DateElement";

const DateInfo = {
    DAY: "DAY",
    MONTH: "MONTH",
    YEAR: "YEAR"
};

interface UnstableDate {
    [key: string]: number | undefined
}

const isRealDate = (date: UnstableDate) => {
    let year = date[DateInfo.YEAR];
    let month = date[DateInfo.MONTH];
    let day = date[DateInfo.DAY];

    return year !== undefined && month !== undefined && day !== undefined;
};

const parseDate = (date: UnstableDate) => {
    return new Date(date[DateInfo.YEAR]!, date[DateInfo.MONTH]! - 1, date[DateInfo.DAY]!);
};

function formatDayMonth(value: number) {
    return value.toString().padStart(2, '0');
}

function formatYear(value: number) {
    if (value > 100) {
        return value.toString();
    }
    if(value > 30) {
        return (1900 + value).toString();
    }
    return (2000 + value).toString();
}

export const DateField: FieldComponent<Date> =
    ({field, tabIndex, contextValue, onFieldEvent}: FieldComponentProps<Date>) => {
        const [unstable, setUnstable] = React.useState<UnstableDate>({});

        React.useEffect(() => {
            let isDate = isRealDate(unstable);
            if (contextValue && !isDate) {
                onFieldEvent!(FIELD_EVENT.RESET_VALUE)
            } else if (isDate) {
                onFieldEvent!(FIELD_EVENT.UPDATE_VALUE, parseDate(unstable));
            }
        }, [unstable]);

        let onChange = (key: string, value: number | undefined) => {
            setUnstable({...unstable, [key]: value});
        };


        return (
            <div className="DateField-container">
                <DateElement tabIndex={tabIndex!}
                             size={2}
                             type={DateInfo.DAY}
                             id={`${field!.id}-day`}
                             value={unstable[DateInfo.DAY]}
                             onValueChange={(value) => onChange(DateInfo.DAY, value)}
                             formatValue={formatDayMonth}/>
                <span className="DateField-separator">/</span>
                <DateElement tabIndex={tabIndex!}
                             size={2}
                             type={DateInfo.MONTH}
                             id={`${field!.id}-day`}
                             value={unstable[DateInfo.MONTH]}
                             onValueChange={(value) => onChange(DateInfo.MONTH, value)}
                             formatValue={formatDayMonth}/>
                <span className="DateField-separator">/</span>
                <DateElement tabIndex={tabIndex!}
                             size={4}
                             type={DateInfo.YEAR}
                             id={`${field!.id}-day`}
                             value={unstable[DateInfo.YEAR]}
                             onValueChange={(value) => onChange(DateInfo.YEAR, value)}
                             formatValue={formatYear}/>
            </div>
        );
    };