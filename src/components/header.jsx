import React, { useState } from "react";

export default function header(counter, name) {
  const [count, setCount] = useState();
  
  return <button>{name}</button>;
}
