import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState([""]);

  const onButtonClick = (buttonText) => {
    let newDisplayValue = calVal + buttonText;
    if (buttonText === "C") {
      setCalVal("");

    } else if (buttonText == "=") {
      calVal = calVal.replace(/\b0+(\d+)/g, "$1");
      let result = eval(calVal);
      setCalVal(result);

    } else {
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.container}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
