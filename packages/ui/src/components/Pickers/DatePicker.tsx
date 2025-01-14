import React from 'react';
import styled from 'styled-components';
import type { PickOptional } from '@sberdevices/plasma-core/types';

import { SimpleDatePicker } from './SimpleDatePicker';
import type { PickerProps } from './Picker';

const maxDayInMonth = (month: number, year: number): number => new Date(year, month + 1, 0).getDate();
const getValues = (date: Date) => [date.getFullYear(), date.getMonth(), date.getDate()];
const defaultOptions = {
    years: true,
    months: true,
    days: true,
};

const StyledWrapper = styled.div`
    display: flex;
    width: max-content;
`;

export interface DatePickerProps
    extends PickOptional<PickerProps, 'disabled' | 'controls' | 'visibleItems'>,
        Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Обработчик изменения
     */
    onChange?: (value: Date) => void;
    /**
     * Значение контрола
     */
    value: Date;
    /**
     * Максимальное значение даты
     */
    max: Date;
    /**
     * Минимальное значение даты
     */
    min: Date;
    /**
     * Формат выводимого значения
     */
    options?: typeof defaultOptions;
}

/**
 * Компонент для выбора даты.
 */
export const DatePicker: React.FC<DatePickerProps> = ({
    options = defaultOptions,
    value,
    max,
    min,
    disabled,
    controls,
    visibleItems,
    onChange,
}) => {
    const [[year, month, day], setState] = React.useState(getValues(value));
    const yearsInterval = React.useMemo(() => [min.getFullYear(), max.getFullYear()], [min, max]);

    const monthsInterval = React.useMemo(() => {
        if (yearsInterval[0] >= value.getFullYear()) {
            return [min.getMonth(), 11];
        }

        if (yearsInterval[1] <= value.getFullYear()) {
            return [0, max.getMonth()];
        }

        return [0, 11];
    }, [max, min, value, yearsInterval]);

    const daysInterval = React.useMemo(() => {
        const valueYear = value.getFullYear();
        const valueMonth = value.getMonth();

        if (valueYear >= yearsInterval[1] && max.getMonth() === valueMonth) {
            return [1, max.getDate()];
        }

        const maxDay = maxDayInMonth(valueMonth, valueYear);

        if (valueYear <= yearsInterval[0] && min.getMonth() === valueMonth) {
            return [min.getDate(), maxDay];
        }

        return [1, maxDay];
    }, [min, yearsInterval, value, max]);

    const getNextMonth = React.useCallback(
        (nextMonth: number, nextYear: number): number => {
            if (nextYear >= yearsInterval[1] && nextMonth >= max.getMonth()) {
                return max.getMonth();
            }

            if (nextYear <= yearsInterval[0] && nextMonth <= max.getMonth()) {
                return min.getMonth();
            }

            return nextMonth;
        },
        [max, min, yearsInterval],
    );

    const getNextDay = React.useCallback(
        (nextDay: number, nextMonth: number, nextYear: number): number => {
            if (nextYear >= yearsInterval[1] && nextMonth >= max.getMonth() && nextDay >= max.getDate()) {
                return max.getDate();
            }

            if (nextYear <= yearsInterval[0] && nextMonth <= max.getMonth() && nextDay <= min.getDate()) {
                return min.getDate();
            }

            const possibleMaxDayInMonth = maxDayInMonth(nextMonth, nextYear);

            if (possibleMaxDayInMonth < nextDay) {
                return possibleMaxDayInMonth;
            }

            return nextDay;
        },
        [yearsInterval, max, min],
    );

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const onYearChange = React.useCallback(
        ({ value: y }) => {
            setState(([_, m, d]) => {
                const nextMonth = getNextMonth(m, y);
                const nextDay = getNextDay(d, nextMonth, y);

                return [y, nextMonth, nextDay];
            });
        },
        [getNextDay, getNextMonth],
    );
    const onMonthChange = React.useCallback(
        ({ value: m }) => {
            setState(([y, _, d]) => {
                const nextDay = getNextDay(d, m, y);

                return [y, m, nextDay];
            });
        },
        [getNextDay],
    );
    const onDayChange = React.useCallback(({ value: d }) => setState(([y, m]) => [y, m, d]), []);
    /* eslint-enable @typescript-eslint/no-unused-vars */

    React.useLayoutEffect(() => {
        const [y, m, d] = getValues(value);
        if (y !== year || m !== month || d !== day) {
            const newValue = new Date(value);
            newValue.setFullYear(year);
            newValue.setMonth(month);
            newValue.setDate(day);

            onChange?.(newValue);
        }
    }, [year, month, day]);

    return (
        <StyledWrapper>
            {options.days && (
                <SimpleDatePicker
                    type="day"
                    value={day}
                    from={daysInterval[0]}
                    to={daysInterval[1]}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    onChange={onDayChange}
                />
            )}
            {options.months && (
                <SimpleDatePicker
                    type="month"
                    value={month}
                    from={monthsInterval[0]}
                    to={monthsInterval[1]}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    onChange={onMonthChange}
                />
            )}
            {options.years && (
                <SimpleDatePicker
                    type="year"
                    value={year}
                    from={yearsInterval[0]}
                    to={yearsInterval[1]}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    onChange={onYearChange}
                />
            )}
        </StyledWrapper>
    );
};
