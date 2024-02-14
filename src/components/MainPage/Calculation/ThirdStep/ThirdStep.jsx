import { useState } from "react"
import { Radio, H3Small, ItemTitle } from "components/Global.styled"
import { StepsForm, LabelObjects, WrapperObject, WrapperInputs } from "../CalculatorForm/CalculatorForm.styled"
import { materialData, coatingData } from "./ThirdStepData"

export function ThirdStep({handleChangeDate, info}) {
    const [coating, setСoating] = useState(info.coating)
    const [material, setMaterial] = useState(info.material)

    function handleRadioChange(e) {
        if (e.currentTarget.name === 'coating') {
            setСoating(e.currentTarget.value)
        } else if (e.currentTarget.name === 'material') {
            setMaterial(e.currentTarget.value)
        }
        handleChangeDate(e.currentTarget.name, e.currentTarget.value)
    }


    return (
        <StepsForm action="">
            <LabelObjects direction='column'>
                <ItemTitle weight='300' color="#000">Основное напольное покрытие:</ItemTitle>
                <WrapperInputs>
                    {coatingData.map(({text}, index) => (
                        <WrapperObject key={index}>
                            <Radio name="coating" type="radio" value={text} onChange={handleRadioChange} checked={coating === text}/>
                            <H3Small weight='300' color='primary'>{text}</H3Small>
                        </WrapperObject>
                    ))}
                </WrapperInputs>
            </LabelObjects>

            <LabelObjects direction='column'>
                <ItemTitle weight='300' color="#000">Материал стен помещения:</ItemTitle>
                <WrapperInputs >
                    {materialData.map(({text}, index) => (
                        <WrapperObject key={index}>
                            <Radio name="material" type="radio" value={text} onChange={handleRadioChange} checked={material === text}/>
                            <H3Small weight='300' color='primary'>{text}</H3Small>
                        </WrapperObject>
                    ))}
                </WrapperInputs>
            </LabelObjects>
        </StepsForm>
    )
}