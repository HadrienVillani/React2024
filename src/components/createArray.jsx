import React, { useState } from "react";
import { useEffect } from "react";
import SortedArray from "./sortedArray";

function CreateArray() {
  const [myArray, setMyArray] = useState([]);
  const [sortArray, setSortArray] = useState([]);

  function random(max) {
    let randomValue = Math.floor(Math.random() * max);
    return randomValue;
  }
  function newElem() {
    const newArray = [];
    for (let i = 0; i < 20; i++) {
      newArray.push(random(20));
    }
    setMyArray(newArray);
  }
  useEffect(() => {
    if (myArray.length === 20) {
    }
  });
  return (
    <div
      style={{ flex: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <button onClick={newElem}>New elements</button>
      <h4>Unsorted elements</h4>
      <ul>
        {myArray.map((elem, key) => {
          return <li key={key}>{elem}</li>;
        })}
      </ul>
      <h4>Sorted elements</h4>
      <ul>
        <SortedArray array={myArray} />
      </ul>
    </div>
  );
}

export default CreateArray;
