import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    "🎃 Halloween",
    "🎅 Christmas",
    "🎉 New Year",
    "🍀 St. Patrick's Day",
    "🦃 Thanksgiving"
];

export function CycleHoliday(): JSX.Element {
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState<number>(0);

    const cycleAlphabetically = () => {
        setCurrentHolidayIndex(
            (prevIndex) => (prevIndex + 1) % holidays.length
        );
    };

    const cycleByYear = () => {
        setCurrentHolidayIndex(
            (prevIndex) => (prevIndex - 1 + holidays.length) % holidays.length
        );
    };

    return (
        <div>
            <h2>Cycle Holiday</h2>
            <p>Holiday: {holidays[currentHolidayIndex]}</p>
            <Button onClick={cycleAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={cycleByYear}>Advance by Year</Button>
        </div>
    );
}
