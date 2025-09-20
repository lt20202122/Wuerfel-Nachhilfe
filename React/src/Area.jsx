import "./Area.css"

function Area(props) {
  const {
    submittedAddSub,
    setSubmitted,
    setSubmittedAddSub,
    areaAddSub,
    setAreaAddSub,
    areaMulDiv,
    setAreaMulDiv,
    createTask
  } = props;

  if (!submittedAddSub) {
    return (
      <div className="learnArea">
        <h3>
          In welchem Bereich sollen die Summanden für die Addition und die
          Subtrahenten/Minuhenden für die Subtraktion liegen?
        </h3>
        <input
          type="number"
          value={areaAddSub}
          onChange={(e) => setAreaAddSub(Number(e.target.value))}
          placeholder="In welchem Bereich soll deine Zahl liegen? 1-?"
          step={100}
          min={100}
        />
        <button onClick={() => setSubmittedAddSub(true)}>Abschicken</button>
      </div>
    );
  }

  return (
    <div className="learnArea">
      <h3>
        In welchem Bereich sollen die Faktoren für die Multiplikation und die
        Dividenten/Divisoren für die Division liegen?
      </h3>
      <input
        type="number"
        value={areaMulDiv}
        onChange={(e) => setAreaMulDiv(Number(e.target.value))}
        placeholder="In welchem Bereich soll deine Zahl liegen? 1-?"
        step={20}
        min={20}
      />
      <button
        onClick={() => {
          setSubmitted(true);
          createTask();
        }}
      >
        Abschicken
      </button>
    </div>
  );
}

export default Area;
