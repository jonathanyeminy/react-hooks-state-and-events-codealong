import React, { useState } from "react";



function Toggle() {
  const [isOn, setIsOn] = useState(false)
  function handleClick() {
    setIsOn(!isOn)
  }
  return <button onClick={handleClick}>{isOn ? 'On' : 'Off'}</button>;
}

export default Toggle;
