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
        setActive,
        time,
        setTime,
        running,
        setRunning,
        startTime,
        setStartTime
    } = props
    useEffect(() => {
        if (task.length === 0) return;
        if (task[1] === "+") setSolution(task[0] + task[2]);
        if (task[1] === "-") setSolution(task[0] - task[2]);
        if (task[1] === "*") setSolution(task[0] * task[2]);
        if (task[1] === "/") setSolution(task[0] / task[2]);
        setRunning(true)
    }, [task]);

    

    useEffect(() => {
        let interval;
        if (running) {
        const start = Date.now() - (time[0] * 1000 + time[1]);
        setStartTime(start);

        interval = setInterval(() => {
            const elapsed = Date.now() - start;
            const seconds = Math.floor(elapsed / 1000);
            const millis = elapsed % 1000;
            setTime([seconds, millis]);
        }, 20); // alle 10ms updaten
        }
        return () => clearInterval(interval);
    }, [running]);
    
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
                <p>Zeit: {time[0]},{time[1]}</p>
                <button onClick={handleInputSet}>Prüfen</button>
            </div>
            <div className="feedback-container" aria-live="polite">
                {feedback}
            </div>
        </div>

    )

}

export default Task