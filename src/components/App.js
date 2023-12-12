
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {

  const [inputText,inputTextSetter] = useState('');

  function inputHandler(e) {
    let valueText = "Hello! " + e.target.value
    inputTextSetter(valueText)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h3>Enter Your Name:</h3>
        <input type="text" name="name" id="name" onKeyUp={inputHandler} />
        <p>{inputText}</p>
    </div>
  )
}

export default App
