import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    const revealAnswer = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <h2>Reveal Answer</h2>
            <Button onClick={revealAnswer}>Reveal Answer</Button>
            {visible && <p>42</p>}
        </div>
    );
}
