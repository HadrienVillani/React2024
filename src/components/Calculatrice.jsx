import React, { useEffect, useReducer, useState } from "react";

const initialState = {
  firstValue: 0,
  secondValue: 0,
  result: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_value":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "calc":
      return state.firstValue !== 0 && state.secondValue !== 0
        ? {
            ...state,
            result: eval(
              `${state.firstValue} ${action.payload} ${state.secondValue}`
            ),
          }
        : console.log("Pas 0");
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function Calculatrice() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setValue = (e) => {
    const { value, name } = e.target;
    dispatch({ type: "set_value", payload: { name, value } });
  };
  return (
    <div>
      <h2>Calculatrice</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <input type="text" name="firstValue" onChange={setValue} />
          <input type="text" name="secondValue" onChange={setValue} />
          <div>
            <button onClick={() => dispatch({ type: "calc", payload: "*" })}>
              X
            </button>
            <button onClick={() => dispatch({ type: "calc", payload: "-" })}>
              -
            </button>
            <button onClick={() => dispatch({ type: "calc", payload: "+" })}>
              +
            </button>
          </div>
          <button onClick={() => dispatch({ type: "reset" })}>C</button>
        </div>
        <div style={{ border: "3px solid white", width: "50%" }}>
          <h3>Votre résultat : {state.result}</h3>
        </div>
      </div>
    </div>
  );
}

export default Calculatrice;
