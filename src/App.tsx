import React, { useState } from "react";
import { Container } from "react-bootstrap";

import "./App.css";
import CalButtons from "./components/CalButtons/CalButtons";
import InputField from "./components/InputField/InputField";

function App() {
  const [numberInputField, setNumberInputField] = useState("");

  const resetCalc = () => {
    return setNumberInputField("");
  };

  const calculateNumbers = (newNumber: string) => {
    setNumberInputField(numberInputField.concat(newNumber));
  };

  const sumOfNumbers = () => {
    setNumberInputField(eval(numberInputField).toString());
  };

  return (
    <div className="App">
      <Container>
        <InputField numberInputField={numberInputField} />
        <CalButtons
          calculateNumbers={calculateNumbers}
          resetCalc={resetCalc}
          sumOfNumbers={sumOfNumbers}
        />
      </Container>
    </div>
  );
}

export default App;
