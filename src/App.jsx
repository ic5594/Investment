import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const changeInputValue = (inputIdentifier, newValue) => {
    setUserInput((prevValue) => {
        return {
          ...prevValue,
          [inputIdentifier]: +newValue.target.value,
        };
    });
  };

  const durationIsValue = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} changeInputValue={changeInputValue} />
      {durationIsValue && <Result input={userInput} />}
      {!durationIsValue && <p className="center">Duration 데이터를 다시 입력해 주세요.</p>}
    </>
  );
}

export default App;
