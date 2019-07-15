import * as React from "react";
import {FieldComponent, FieldComponentProps} from "../../definition/component/FieldComponent";
import {FIELD_EVENT} from "../../definition/event/events";
import {DateElement} from "./element/DateElement";

export const DateInfo = {
    DAY: "DAY",
    MONTH: "MONTH",
    YEAR: "YEAR"
};

interface UnstableDate {
    [key: string]: number | undefined
}

const isRealDate = (date: UnstableDate) => {
    const year = date[DateInfo.YEAR];
    const month = date[DateInfo.MONTH];
    const day = date[DateInfo.DAY];

    return year !== undefined && month !== undefined && day !== undefined;
};

const parseDate = (date: UnstableDate) => {
    return new Date(date[DateInfo.YEAR]!, date[DateInfo.MONTH]! - 1, date[DateInfo.DAY]!);
};

export function formatDayMonth(value: number) {
    return value.toString().padStart(2, '0');
}

export function formatYear(value: number) {
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
        const [unstable, setUnstable] = React.useState<UnstableDate>(() => (contextValue ? {
            [DateInfo.DAY]: contextValue.getDate(),
            [DateInfo.MONTH]: contextValue.getMonth() + 1,
            [DateInfo.YEAR]: contextValue.getFullYear(),
        } : {}));

        React.useEffect(() => {
            let isDate = isRealDate(unstable);
            if (contextValue && !isDate) {
                onFieldEvent!(FIELD_EVENT.RESET_VALUE)
            } else if (isDate) {
                onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, parseDate(unstable));
            }
        }, [unstable]);

        let onChange = (key: string, value: number | undefined) => {
            setUnstable({...unstable, [key]: value});
        };

        return (
            <div className="DateField-container">
                <DateElement tabIndex={tabIndex!}
                             key={DateInfo.DAY}
                             size={2}
                             type={DateInfo.DAY}
                             id={`${field!.id}-day`}
                             value={unstable[DateInfo.DAY]}
                             onValueChange={(value) => onChange(DateInfo.DAY, value)}
                             formatValue={formatDayMonth}/>
                <span className="DateField-separator"/>
                <DateElement tabIndex={tabIndex!}
                             key={DateInfo.MONTH}
                             size={2}
                             type={DateInfo.MONTH}
                             id={`${field!.id}-day`}
                             value={unstable[DateInfo.MONTH]}
                             onValueChange={(value) => onChange(DateInfo.MONTH, value)}
                             formatValue={formatDayMonth}/>
                <span className="DateField-separator"/>
                <DateElement tabIndex={tabIndex!}
                             key={DateInfo.YEAR}
                             size={4}
                             type={DateInfo.YEAR}
                             id={`${field!.id}-day`}
                             value={unstable[DateInfo.YEAR]}
                             onValueChange={(value) => onChange(DateInfo.YEAR, value)}
                             formatValue={formatYear}/>
            </div>
        );
    };