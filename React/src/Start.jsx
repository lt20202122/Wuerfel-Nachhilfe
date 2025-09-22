import { useState, useEffect } from "react";
import Area from "./Area";
import Task from "./Task"

function Start() {
  const [solution, setSolution] = useState();
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState();
  const [active, setActive] = useState(false)
  const [time, setTime] = useState([0, 0]); // [Sekunden, Millisekunden]
  const [running, setRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const [submitted, setSubmitted] = useState(false);
  const [submittedAddSub, setSubmittedAddSub] = useState(false);
  const [areaAddSub, setAreaAddSub] = useState(100);
  const [areaMulDiv, setAreaMulDiv] = useState(100);

  const createTask = () => {
    let operatorNUM = Math.floor(Math.random() * 4) + 1;
    if (operatorNUM === 1) {
      console.log("Operator: +")
      let num1 = Math.floor(Math.random() * Number(areaAddSub)) + 1;
      let num2 = Math.floor(Math.random() * Number(areaAddSub)) + 1;
      setTask([num1,"+",num2])
      } 

      else if (operatorNUM === 2) {
        console.log("Operator: -")
        let num1 = Math.floor(Math.random() * areaAddSub) + 1;
        let num2 = Math.floor(Math.random() * areaAddSub) + 1;

        if (num1>num2) setTask([num1, "-", num2]);
        else setTask([num2,"-",num1])
      } 
    
      else if (operatorNUM === 3) {
        console.log("Operator: *")
        let num1 = Math.floor(Math.random() * Number(areaMulDiv)) + 1;
        let num2 = Math.floor(Math.random() * Number(areaMulDiv)) + 1;
        setTask([num1, "*", num2]);
      } 
      else if (operatorNUM === 4) {
        console.log("Operator: /")
        let num1;
        let num2;
        //check task
        do {
          num1 = Math.floor(Math.random() * Number(areaMulDiv)) + 1;
          num2 = Math.floor(Math.random() * Number(areaMulDiv)) + 1;
        } while (num1 % num2 !== 0);
        setTask([num1, "/", num2]);
      }
  };

  

  const handleInputChange = (e) => setInput(e.target.value);
  const handleNewTask = () => {
    setRunning(true)
    setTime([0,0])
    setTask([])
    setInput("")
    setFeedback(null)
    setSolution(null)
    setActive(false)
    console.log("Handling new Task")
    createTask()

  }
  const handleInputSet = () => {
    const numericInput = Number(input);
    let baseFeedback;
    setRunning(false)
    if (numericInput === solution) {
      baseFeedback = <p>Richtig!</p>;
    } else {
      baseFeedback = (
        <>
          <p>Leider falsch!</p>
          <p>Die richtige Lösung wäre {solution} gewesen.</p>
        </>
      );
    }

    const newFeedback = (
      <>
        {baseFeedback}
        <button onClick={handleNewTask}>Neue Aufgabe</button>
      </>
    );

    setFeedback(newFeedback);
    setActive(true);
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
        active={active}
        setActive={setActive}
        time = {time}
        setTime = {setTime}
        running = {running}
        setRunning = {setRunning}
        startTime = {startTime} 
        setStartTime = {setStartTime}
        />
      )}
    </div>
  );
}

export default Start;
