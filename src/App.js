import "./styles.css";
import React, { useState } from "react";
import Stepper from "./components/stepper";
import StepperControl from "./components/StepperControl";
import { StepperContext } from "./contexts/StepperContext";
import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Final from "./components/steps/Final";
import Payment from "./components/steps/Payment";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Account information", "personal details", "complete"];
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const displayStep = (step) => {
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Final />;
      default:
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    // Check if steps are within bounds
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* stepper */}
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
        {/* display Components */}
        <div className="my-10 p-10">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {/* navigation contols */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
