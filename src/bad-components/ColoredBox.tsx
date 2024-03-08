import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    setCurrentColor
}: {
    setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    const nextColor = () => {
        setColorIndex((colorIndex + 1) % COLORS.length);
        setCurrentColor(COLORS[(colorIndex + 1) % COLORS.length]);
    };

    return <Button onClick={nextColor}>Next Color</Button>;
}

function ColorPreview({ color }: { color: string }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const defaultColor = COLORS[DEFAULT_COLOR_INDEX];
    const [currentColor, setCurrentColor] = useState<string>(defaultColor);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {currentColor}</span>
            <div>
                <ChangeColor setCurrentColor={setCurrentColor}></ChangeColor>
                <ColorPreview color={currentColor}></ColorPreview>
            </div>
        </div>
    );
}
