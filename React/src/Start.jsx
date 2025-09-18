import { useState } from "react";
import { useEffect } from "react";

function Start() {
  const [areaAddSub, setAreaAddSub] = useState(100);
  const [areaMulDiv, setAreaMulDiv] = useState(100);
  const [submitted, setSubmitted] = useState(false);
  const [submittedAddSub, setSubmittedAddSub] = useState(false)
  const [solution, setSolution] = useState()
  const [Task, setTask] = useState([])
  const [showSolution, setShowSolution] = useState(false)
  const [input, setInput] = useState("")
  let content
  let sol
  const [feedback, setFeedback] = useState()
  console.log("Loading vars")

  const handleAreaChangeAddSub = (e) => {
    setAreaAddSub(e.target.value);
  };
  const handleAreaChangeMulDiv = (e) => {
    setAreaMulDiv(e.target.value);
  };
  const handleAreaSetMulDiv = () => {
    setSubmitted(true); // Eingabefeld ausblenden
    CreateTask()
  };
  const handleAreaSetAddSub = () => {
    setSubmittedAddSub(true)
  }
  const CreateTask = () => {
    console.log("Starting task()")
    const op = () => {return(Math.floor(Math.random()*4)+1)}
    const operatorNUM = op()
    if (operatorNUM === 1) { // +
        let num1 = Math.floor(Math.random() * areaAddSub) + 1;
        let num2 = Math.floor(Math.random() * areaAddSub) + 1;
        setTask(()=>[num1,"+",num2])
    }
    else if (operatorNUM === 2) { // -
        let num1 = Math.floor(Math.random() * areaAddSub) + 1;
        let num2 = Math.floor(Math.random() * areaAddSub) + 1;
        setTask(()=>[num1,"-",num2])
    }
    else if (operatorNUM===3) { // *
        let num1 = Math.floor(Math.random() * areaMulDiv) + 1;
        let num2 = Math.floor(Math.random() * areaMulDiv) + 1;
        setTask(()=>[num1,"*",num2])
    }
    else if (operatorNUM === 4) {
        let num1 = Math.floor(Math.random() * areaMulDiv) + 1;
        let num2 = Math.floor(Math.random() * areaMulDiv) + 1;
        setTask(()=>[num1,"/",num2])
    }
    }
  useEffect(()=> {
    if (Task.length===0) return;
    console.log("Starting to calculate solution")
    console.log("Task from calc(): "+Task)
    if (Task[1] === "+") {
      setSolution(Task[0]+Task[2])
    }
    else if (Task[1] === "-") {
      setSolution(Task[0]-Task[2])
    }
    else if (Task[1] === "*") {
      setSolution(Task[0]*Task[2])
  }
    else if (Task[1] === "/") {
      setSolution(Task[0]/Task[2])
    }
    console.log("Solution: "+solution)
    //setShowSolution(true)


  }, [Task])
  
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  const handleInputSet = () => {
    console.log("input: "+input)
    console.log("Solution from handleInputSet: "+solution)
    if (Number(input) == solution) {
      console.log("Correct!")
      setFeedback (<p>Richtig!</p>)
    }
    else {
      console.log("Wrong!")
      setFeedback(<p>Leider falsch</p>)
    }
  }
  
    
    // prüfen, ob die Rechnung in Ordnung ist

    // Anzeige
    if (!submitted) {
      if (!submittedAddSub) {
        content = (
          <div className="learnArea">
            <h3 id="areaTASK">
              In welchem Bereich sollen die Summanden für die Addition und die Subtrahenten/Minuhenden für die Subtraktion liegen?
            </h3>
            <input
              type="number"
              value={areaAddSub}
              onChange={handleAreaChangeAddSub}
              placeholder="In welchem Bereich soll deine Zahl liegen? 1-?"
              step={100}
              min={100}
            />
            <button onClick={handleAreaSetAddSub}>Abschicken</button>
          </div>
        )
      }
      else {
        content = (
          <div className="learnArea">
            <h3 id="areaTASK">
              In welchem Bereich sollen die Faktoren für die Multiplikation und die Dividenten/Divisoren für die Division liegen?
            </h3>
            <input
              type="number"
              value={areaMulDiv}
              onChange={handleAreaChangeMulDiv}
              placeholder="In welchem Bereich soll deine Zahl liegen? 1-?"
              step={50}
              min={50}
            />
            <button onClick={handleAreaSetMulDiv}>Abschicken</button>
      </div>
        )
        }
      }
      else {
        content = (
      <div className="displayNums">
        <h3>Löse die folgende Aufgabe:</h3>
        {console.log("Task: "+Task)}
        <p>{Task}</p>
        <input value={input} type="number" id="solINPUT" placeholder="Gib deine Aufgabe ein" onChange={handleInputChange}></input>
        <button onClick={handleInputSet}>Prüfen</button>
      </div>
      )
    }
    
    if (solution) {
      sol = (
        <p>Solution: {solution}</p>
      )
    }
    else {sol = (<> </>)}
    
  return (
  <div className="All">{content}{sol}{feedback}</div>
  )
};


export default Start;
