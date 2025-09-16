import { useState } from "react";

function Start() {
  const [areaAddSub, setAreaAddSub] = useState(100);
  const [areaMulDiv, setAreaMulDiv] = useState(100);
  const [submitted, setSubmitted] = useState(false);
  const [randomNumber, setRandomNumber] = useState([]);
  const [submittedAddSub, setSubmittedAddSub] = useState(false)
  let [solution, setSolution] = useState()
  //const [task, setTask] = useState()

  const handleAreaChangeAddSub = (e) => {
    setAreaAddSub(e.target.value);
  };
  const handleAreaChangeMulDiv = (e) => {
    setAreaMulDiv(e.target.value);
  };

  const handleAreaSetMulDiv = () => {
    setSubmitted(true); // Eingabefeld ausblenden
  };
  const handleAreaSetAddSub = () => {
    setSubmittedAddSub(true)
  }
  const task = () => {
    const op = () => {return(Math.floor(Math.random()*4)+1)}
    const operatorNUM = op()
    if (operatorNUM === 1) { // +
        let num1 = Math.floor(Math.random() * areaAddSub) + 1;
        let num2 = Math.floor(Math.random() * areaAddSub) + 1;
        setRandomNumber(num1,num2);
        setSolution(num1+num2)
    }
    else if (operatorNUM === 2) { // -
        let num1 = Math.floor(Math.random() * areaAddSub) + 1;
        let num2 = Math.floor(Math.random() * areaAddSub) + 1;
        setRandomNumber(num1,num2)
        setSolution(num1-num2)
    }
    else if (operatorNUM===3) { // *
        let num1 = Math.floor(Math.random() * areaMulDiv) + 1;
        let num2 = Math.floor(Math.random() * areaMulDiv) + 1;
        setRandomNumber(num1,num2)
        setSolution(num1*num2)
    }
    else if (operatorNUM === 4) {
        let num1 = Math.floor(Math.random() * areaMulDiv) + 1;
        let num2 = Math.floor(Math.random() * areaMulDiv) + 1;
        setRandomNumber(num1,num2)
        setSolution(num1/num2)
    }
    
    }
    
    // prüfen, ob die Rechnung in Ordnung ist
  return (
  <div>
    {!submitted ? (
      !submittedAddSub ? (
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
      ) : (
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
    ) : (
      <div className="displayNums">
        <h3>Löse die folgende Aufgabe:</h3>
        <p>{"????"}</p>
      </div>
    )}
  </div>
);
};


export default Start;
