import { Content, CalculationNav, Way, Completed, Moving } from "./CalculatorForm.styled";
import { H2, H4Huge, FontDark, PrimaryButtonP, GrayButton } from "components/Global.styled";
import { FirstStep } from "../FirstStep/FirstStep";
import { SecondStep } from "../SecondStep/SecondStep";
import { ThirdStep } from "../ThirdStep/ThirdStep";
import { useState } from "react";
import { alert} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';



export function CalculatorForm({changeStep, step}) {
    const [info, setInfo] = useState({})
    const [isSubmited, setIsSubmited] = useState(false)
    
    function handleChangeDate(elementName, elementValue) {
        setInfo({
            ...info,
            [elementName]: elementValue
        })
    }

    function handleSubmit() {
        if (Object.keys(info).length >= 6) {
            setIsSubmited(true)
        } else {
            alert({
                text: 'Вы не указали все данные!'
            });
        }
    }

    return (
        <Content>
            {isSubmited ? (
                <H2 color="primary" >Данные отправлено</H2>
            ) : (
                <>
                    <CalculationNav>
                        <H2 color="#7B5896" weight='500' align='center'>Калькулятор XL PIPE</H2>
                        <H4Huge color='primary' weight='400'><FontDark>Шаг {step}</FontDark> из 3</H4Huge>
                        <Way>
                            <Completed percent={step}/>
                        </Way>
                    </CalculationNav>

                    {step === 1 ? <FirstStep info={info} handleChangeDate={handleChangeDate}/> : null}
                    {step === 2 ? <SecondStep info={info}  handleChangeDate={handleChangeDate} /> : null}
                    {step === 3 ? <ThirdStep info={info}  handleChangeDate={handleChangeDate} /> : null}

                    <Moving>
                        {step !== 1 ? (
                            <GrayButton onClick={() => changeStep(step-1)}>
                                Шаг {step - 1} 
                            </GrayButton>
                        ) : <i></i>}

                        {step === 3 ? (
                            <PrimaryButtonP onClick={handleSubmit}>
                                Получить расчет
                            </PrimaryButtonP>
                        ) : (
                            <PrimaryButtonP onClick={() => changeStep(step+1)}>
                                Шаг {step + 1} 
                            </PrimaryButtonP>
                        )}
                    </Moving>
                </>
            )}
        </Content>
    )
}