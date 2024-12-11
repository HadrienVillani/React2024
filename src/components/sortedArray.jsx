import React, { useEffect, useState } from "react";

function SortedArray(array) {
  const newArray = array.array.sort((a, b) => a - b);

  return (
    <>
      {newArray.map((element, key) => {
        return <li key={key}>{element}</li>;
      })}
    </>
  );
}

export default SortedArray;
