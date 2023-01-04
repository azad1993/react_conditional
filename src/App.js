import React, { useState } from "react";

import Custombutton from "./components/CustomButton/Custombutton.js";


function App() {
  const [mytext, setMytext] = useState("Click");
  const [myClass, setMyclass] = useState('block')
  let buttonClick = (e) => {
    e.target.className = "warnMessage";
    setMytext("Clicked");
  };
  let buttonHover = () => {
    setMyclass('none')
  };
  let buttonLeave = () => {
    setMyclass('block')
  };
  return (
    <div className="App">
      
          <Custombutton mytext={mytext} setMyclass={setMyclass} buttonHover={buttonHover} buttonLeave = {buttonLeave}/>
          <Custombutton mytext={mytext} buttonClick={buttonClick} />
          <Custombutton mytext={mytext} setMyclass={setMyclass} buttonHover={buttonHover} buttonLeave = {buttonLeave}/>
    </div>
  );
}

export default App;