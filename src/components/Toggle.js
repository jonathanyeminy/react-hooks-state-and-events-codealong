import React, { useState } from "react";



function Toggle() {
  const [isOn, setIsOn] = useState(false)
  function handleClick() {
    setIsOn(!isOn)
  }
  const color= isOn ? 'white' : 'red'
  return <button style={{background: color}} onClick={handleClick}>{isOn ? 'On' : 'Off'}</button>;
}

export default Toggle;
