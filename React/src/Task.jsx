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
        setInput,
        active,
        setActive
    } = props
    useEffect(() => {
        if (task.length === 0) return;
        if (task[1] === "+") setSolution(task[0] + task[2]);
        if (task[1] === "-") setSolution(task[0] - task[2]);
        if (task[1] === "*") setSolution(task[0] * task[2]);
        if (task[1] === "/") setSolution(task[0] / task[2]);
    }, [task]);

    return (
        <div className={`displayNums ${active ? "solution" : ""}`}>
            <div className="header">
                <h3>Löse die folgende Aufgabe:</h3>
                {console.log("task: "+task)}
                <p>{task.join(" ")}</p>
                <input
                    value={input}
                    type="number"
                    id="solINPUT"
                    placeholder="Gib deine Lösung ein"
                    onChange={handleInputChange}
                    disabled={active}
                />
                <button onClick={handleInputSet}>Prüfen</button>
            </div>
            <div className="feedback-container" aria-live="polite">
                {feedback}
            </div>
        </div>

    )

}

export default Task