import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDieValue, setLeftDieValue] = useState<number>(1);
    const [rightDieValue, setRightDieValue] = useState<number>(6);

    const rollDie = (
        dieSetter: React.Dispatch<React.SetStateAction<number>>
    ) => {
        const newValue = d6();
        dieSetter(newValue);
    };

    return (
        <div>
            <Button onClick={() => rollDie(setLeftDieValue)}>Roll Left</Button>
            <span data-testid="left-die">{leftDieValue}</span>
            <Button onClick={() => rollDie(setRightDieValue)}>
                Roll Right
            </Button>
            <span data-testid="right-die">{rightDieValue}</span>
            {leftDieValue === rightDieValue &&
                leftDieValue === 1 &&
                " You Lose"}
            {leftDieValue === rightDieValue && leftDieValue !== 1 && " You Win"}
        </div>
    );
}
