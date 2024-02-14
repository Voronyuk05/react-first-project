import { useState } from "react";
import { CalculationComponent, CalculationContainer } from "./Calculation.styled";
import { RightBar } from "./RightBar/RightBar";
import { CalculatorForm } from "./CalculatorForm/CalculatorForm";

export function Calculation() {
    const [step, setStep] = useState(1)

    function changeStep(nextStep) {
        setStep(nextStep)
    }

    return (
        <CalculationComponent>
            <CalculationContainer>
                <CalculatorForm step={step} changeStep={changeStep}/>
                <RightBar step={step} />
            </CalculationContainer>
        </CalculationComponent>
    )
}