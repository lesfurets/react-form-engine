import * as React from "react";
import {FieldComponent, FieldComponentProps} from "../../../definition/theme/field/FieldComponent";
import {FIELD_EVENT} from "../../../definition/event/events";
import {DateElement} from "./element/DateElement";

export const DateInfo = {
    DAY: "DAY",
    MONTH: "MONTH",
    YEAR: "YEAR"
};

interface UnstableDate {
    [key: string]: number | undefined
}

export const NbDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const getNbDays = (month: number, year: number) =>
    (month === 2 && isBisextile(year)) ? 29 : NbDaysInMonth[month - 1];

export const isBisextile = (year: number) =>
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

const isRealDate = (date: UnstableDate) => {
    const year = date[DateInfo.YEAR];
    const month = date[DateInfo.MONTH];
    const day = date[DateInfo.DAY];

    return year !== undefined && month !== undefined && day !== undefined
        && year > 1000
        && month > 0 && month <= 12
        && day > 0 && day <= getNbDays(month, year);
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
        const [focus, setFocus] = React.useState<string | undefined>(undefined);
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
            switch (key) {
                case DateInfo.DAY:
                    setFocus(DateInfo.MONTH);
                    break;
                case DateInfo.MONTH:
                    setFocus(DateInfo.YEAR);
                    break;
                case DateInfo.YEAR:
                    setFocus(undefined);
                    break;
            }
        };

        let onReset = (key: string) => {
            switch (key) {
                case DateInfo.DAY:
                    setFocus(undefined);
                    break;
                case DateInfo.MONTH:
                    setFocus(DateInfo.DAY);
                    break;
                case DateInfo.YEAR:
                    setFocus(DateInfo.MONTH);
                    break;
            }
        };

        return (
            <div className="DateField-container">
                <DateElement tabIndex={tabIndex!}
                             key={DateInfo.DAY}
                             size={2}
                             type={DateInfo.DAY}
                             id={`${field!.id}-day`}
                             value={unstable[DateInfo.DAY]}
                             forceFocus={focus === DateInfo.DAY}
                             onValueChange={onChange}
                             onReset={onReset}
                             formatValue={formatDayMonth}/>
                <span className="DateField-separator"/>
                <DateElement tabIndex={tabIndex!}
                             key={DateInfo.MONTH}
                             size={2}
                             type={DateInfo.MONTH}
                             id={`${field!.id}-month`}
                             value={unstable[DateInfo.MONTH]}
                             forceFocus={focus === DateInfo.MONTH}
                             onValueChange={onChange}
                             onReset={onReset}
                             formatValue={formatDayMonth}/>
                <span className="DateField-separator"/>
                <DateElement tabIndex={tabIndex!}
                             key={DateInfo.YEAR}
                             size={4}
                             type={DateInfo.YEAR}
                             id={`${field!.id}-year`}
                             value={unstable[DateInfo.YEAR]}
                             forceFocus={focus === DateInfo.YEAR}
                             onValueChange={onChange}
                             onReset={onReset}
                             formatValue={formatYear}/>
            </div>
        );
    };