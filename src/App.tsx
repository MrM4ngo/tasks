import React from "react";
import "./App.css";

function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = React.useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
            />
            {userAnswer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}

function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = React.useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] =
        React.useState<string>("");

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft((prevAttempts) => prevAttempts - 1);
        }
    };

    const handleGainAttempts = () => {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts)) {
            setAttemptsLeft((prevAttempts) => prevAttempts + parsedAttempts);
            setRequestedAttempts("");
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleInputChange}
                min="1"
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}

function EditMode(): JSX.Element {
    const [editMode, setEditMode] = React.useState<boolean>(false);
    const [userName, setUserName] = React.useState<string>("Your Name");
    const [isStudent, setIsStudent] = React.useState<boolean>(true);

    const handleSwitchChange = () => {
        setEditMode((prevMode) => !prevMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleStudentChange = () => {
        setIsStudent((prevIsStudent) => !prevIsStudent);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={editMode}
                onChange={handleSwitchChange}
            />
            {editMode ? (
                <div>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
                    />
                    <input
                        type="checkbox"
                        checked={isStudent}
                        onChange={handleStudentChange}
                    />
                </div>
            ) : (
                <div>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            )}
        </div>
    );
}

function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown"
    ];
    const [selectedColor, setSelectedColor] = React.useState<string>(colors[0]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            {colors.map((color, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        value={color}
                        checked={selectedColor === color}
                        onChange={handleColorChange}
                        id={color}
                    />
                    <label htmlFor={color}>{color}</label>
                </div>
            ))}
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selectedColor
                }}
                data-testid="colored-box"
            ></div>
        </div>
    );
}

function MultipleChoiceQuestions({
    expectedAnswer,
    options
}: {
    expectedAnswer: string;
    options: string[];
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = React.useState<string>(
        options[0]
    );

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedChoice(event.target.value);
    };

    return (
        <div>
            <select value={selectedChoice} onChange={handleSelectChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {selectedChoice === expectedAnswer ? (
                <span>✔️</span>
            ) : (
                <span>❌</span>
            )}
        </div>
    );
}

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript | David Bui
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <CheckAnswer expectedAnswer="React" />
            <GiveAttempts />
            <EditMode />
            <ChangeColor />
            <MultipleChoiceQuestions
                expectedAnswer="B"
                options={["A", "B", "C", "D"]}
            />
        </div>
    );
}

export default App;
