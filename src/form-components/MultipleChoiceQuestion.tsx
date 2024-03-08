import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);
    function updateSelectedOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedOption(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userOptions">
                <Form.Label>Select an option:</Form.Label>
                <Form.Select
                    value={selectedOption}
                    onChange={updateSelectedOption}
                >
                    {options.map(
                        (option: string): JSX.Element => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        )
                    )}
                </Form.Select>
            </Form.Group>
            {selectedOption === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
