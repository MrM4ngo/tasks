import React, { useState } from "react";
import "./App.css";

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export const RevealAnswer: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const revealAnswer = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <h2>Reveal Answer</h2>
            <button onClick={revealAnswer}>Reveal Answer</button>
            {visible && <p>42</p>}
        </div>
    );
};

type QuestionType = "multiple_choice_question" | "short_answer_question";

export const ChangeType: React.FC = () => {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const changeType = () => {
        setType((prevType) =>
            prevType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };

    return (
        <div>
            <h2>Change Type</h2>
            <button onClick={changeType}>Change Type</button>
            <p>
                {type === "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </p>
        </div>
    );
};

export const StartAttempt: React.FC = () => {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        setInProgress(true);
        setAttempts((prevAttempts) => prevAttempts - 1);
    };

    const stopQuiz = () => {
        setInProgress(false);
    };

    const mulligan = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <h2>Start Attempt</h2>
            <p>Attempts: {attempts}</p>
            <button onClick={startQuiz} disabled={attempts === 0 || inProgress}>
                Start Quiz
            </button>
            <button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </button>
            <button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </button>
        </div>
    );
};

const d6 = (): number => Math.floor(Math.random() * 6) + 1;

export const TwoDice: React.FC = () => {
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
                <button onClick={rollLeft}>Roll Left</button>
                <span data-testid="left-die">{leftDie}</span>
            </div>
            <div>
                <button onClick={rollRight}>Roll Right</button>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            {leftDie === rightDie && (
                <p>You {(leftDie === 1 && "Lose") || "Win"}</p>
            )}
        </div>
    );
};

const holidays = [
    "🎃 Halloween",
    "🎅 Christmas",
    "🎉 New Year",
    "🍀 St. Patrick's Day",
    "🦃 Thanksgiving"
];

export const CycleHoliday: React.FC = () => {
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
            <button onClick={cycleAlphabetically}>Advance by Alphabet</button>
            <button onClick={cycleByYear}>Advance by Year</button>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript | David Bui
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Counter />
            <RevealAnswer />
            <ChangeType />
            <StartAttempt />
            <TwoDice />
            <CycleHoliday />
        </div>
    );
};

export default App;
