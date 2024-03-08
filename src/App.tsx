import React, { useState } from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    // Example of using useState
    const [showCounter, setShowCounter] = useState<boolean>(true);

    // Function to toggle the visibility of Counter component
    const toggleCounter = () => {
        setShowCounter((prevShowCounter) => !prevShowCounter);
    };

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript | David Bui
            </header>
            <hr></hr>
            {showCounter && <Counter></Counter>}
            <button onClick={toggleCounter}>Toggle Counter</button>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
