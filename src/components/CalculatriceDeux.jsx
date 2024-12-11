import React, { useReducer } from "react";
const initialState = {
  calc: "",
  result: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "set_value":
      return {
        ...state,
        calc: state.calc + action.payload.value,
      };

    case "calc":
      return state.calc !== ""
        ? {
            ...state,
            result: eval(state.calc),
          }
        : console.log("Pas 0");
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CalculatriceDeux() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const allButton = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "/",
    "*",
    "-",
    "+",
  ];
  const setValue = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "set_value", payload: { name, value } });
  };

  return (
    <section>
      <h2>CalculatriceDeux</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "250px",
            border: "3px solid white",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>{state.result === 0 ? state.calc : state.result}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "250px",
            justifyContent: "center",
          }}
        >
          {allButton.map((button, i) => {
            return (
              <button key={i} name={"calc"} value={button} onClick={setValue}>
                {button}
              </button>
            );
          })}
          <button onClick={() => dispatch({ type: "reset" })}>AC</button>
          <button onClick={() => dispatch({ type: "calc" })}>=</button>
        </div>
      </div>
    </section>
  );
}

export default CalculatriceDeux;
