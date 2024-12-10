import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/button";
import CreateArray from "./components/createArray";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h2>Challenge Chrono</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "500px",
          }}
        >
          <Button name={"Compteur +1"} number={1} />
          <Button name={"Compteur +2"} number={2} />
        </div>
      </div>
      <div>
        <h2>ChallengePair</h2>
        <CreateArray />
      </div>
    </>
  );
}

export default App;
