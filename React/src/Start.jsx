import { useState, useEffect } from "react";
import Area from "./Area";
import Task from "./Task"

function Start() {
  const [solution, setSolution] = useState();
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState();

  const [submitted, setSubmitted] = useState(false);
  const [submittedAddSub, setSubmittedAddSub] = useState(false);
  const [areaAddSub, setAreaAddSub] = useState(100);
  const [areaMulDiv, setAreaMulDiv] = useState(100);

  const createTask = () => {
    let operatorNUM = Math.floor(Math.random() * 4) + 1;
    if (operatorNUM === 1) {
      let num1 = Math.floor(Math.random() * areaAddSub) + 1;
      let num2 = Math.floor(Math.random() * areaAddSub) + 1;
      setTask([num1, "+", num2]);
    } else if (operatorNUM === 2) {
      let num1 = Math.floor(Math.random() * areaAddSub) + 1;
      let num2 = Math.floor(Math.random() * areaAddSub) + 1;
      setTask([num1, "-", num2]);
    } else if (operatorNUM === 3) {
      let num1 = Math.floor(Math.random() * areaMulDiv) + 1;
      let num2 = Math.floor(Math.random() * areaMulDiv) + 1;
      setTask([num1, "*", num2]);
    } else if (operatorNUM === 4) {
      let num1 = Math.floor(Math.random() * areaMulDiv) + 1;
      let num2 = Math.floor(Math.random() * areaMulDiv) + 1;
      setTask([num1, "/", num2]);
    }
  };

  

  const handleInputChange = (e) => setInput(e.target.value);
  const handleNewTask = () => {
    setTask([])
    setInput("")
    setFeedback(null)
    setSolution(null)
    document.getElementById("solINPUT").disabled=false
    createTask()

  }
  const handleInputSet = () => {
    if (Number(input) === solution) {
      setFeedback(<p>Richtig!</p>);
    } else {
      setFeedback(<><p>Leider falsch!</p>
      <p>Die richtige Lösung wäre {solution} gewesen.</p></>);
    }
    document.getElementById("solINPUT").disabled=true
    setFeedback(prev => (
      <>
        {prev}
        <button onClick={handleNewTask}>Neue Aufgabe</button>
      </>
    ));
  };

  return (
    <div className="All">
      {!submitted ? (
        <Area
          submitted={submitted}
          submittedAddSub={submittedAddSub}
          setSubmitted={setSubmitted}
          setSubmittedAddSub={setSubmittedAddSub}
          areaAddSub={areaAddSub}
          setAreaAddSub={setAreaAddSub}
          areaMulDiv={areaMulDiv}
          setAreaMulDiv={setAreaMulDiv}
          createTask={createTask}
        />
      ) : (
        <Task 
        task={task}
        setTask={setTask}
        createTask={createTask}
        handleInputChange={handleInputChange}
        feedback={feedback}
        setFeedback={setFeedback}
        handleInputSet={handleInputSet}
        solution={solution}
        setSolution={setSolution}
        input={input}
        setInput={setInput}
        />
      )}
    </div>
  );
}

export default Start;
