import React, { useState } from "react";



function App() {

  const [clickText, setClick] = useState('Hello'); 
  const [color, setColor] = useState(false);


function setOnMove(){
setColor(true);
}
function setOnOut(){
  setColor(false);
}

  function setOnClick(){
  setClick('Hi');
  }
  return (
    <div className="container">
      <h1>{clickText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style ={{ backgroundColor : color ? "Black" : "White"}} onClick={setOnClick} onMouseOver = {setOnMove} onMouseOut = {setOnOut}>Submit</button>
    </div>
  );
}

export default App;
