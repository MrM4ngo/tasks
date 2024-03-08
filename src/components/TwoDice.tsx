import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    return (
        <div>
            <h2>Two Dice</h2>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <span data-testid="left-die">{leftDie}</span>
            </div>
            <div>
                <Button onClick={rollRight}>Roll Right</Button>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            {leftDie === rightDie && (
                <p>You {(leftDie === 1 && "Lose") || "Win"}</p>
            )}
        </div>
    );
}
