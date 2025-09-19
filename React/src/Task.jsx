import { useState, useEffect } from "react";
import "./Task.css"

function Task (props) {
    const {
        task,
        setTask,
        createTask,
        handleInputChange,
        feedback,
        setFeedback,
        handleInputSet,
        solution,
        setSolution,
        input,
        setInput
    } = props
    useEffect(() => {
        if (task.length === 0) return;
        if (task[1] === "+") setSolution(task[0] + task[2]);
        if (task[1] === "-") setSolution(task[0] - task[2]);
        if (task[1] === "*") setSolution(task[0] * task[2]);
        if (task[1] === "/") setSolution(task[0] / task[2]);
    }, [task]);

    return (
        <div className="displayNums">
            <div className="header">
                <h3>Löse die folgende Aufgabe:</h3>
                <p>{task.join(" ")}</p>
                <input
                    value={input}
                    type="number"
                    id="solINPUT"
                    placeholder="Gib deine Lösung ein"
                    onChange={handleInputChange}
                />
                <button onClick={handleInputSet}>Prüfen</button>
            </div>
            <div className="feedback-container">
                {feedback}
            </div>
        </div>

    )

}

export default Task