import { useState } from "react"
import { RadioObjects, H3Small, ItemTitle, InputRange } from "components/Global.styled"
import { placesData } from "./PlacesData"
import { StepsForm, LabelObjects, WrapperObject, InputMeters } from "../CalculatorForm/CalculatorForm.styled"

export function FirstStep({handleChangeDate, info}) {
    const [range, setRange] = useState(info.range)
    const [place, setPlace] = useState(info.place)

    function handleRangeChange(e) {
        setRange(e.currentTarget.value)
        handleChangeDate(e.currentTarget.name, e.currentTarget.value)
    }

    function handleRadioChange(e) {
        setPlace(e.currentTarget.value)
        handleChangeDate(e.currentTarget.name, e.currentTarget.value)
    }


    return (
        <StepsForm action="">
            <LabelObjects items='center'>
                <ItemTitle weight='300' color="#000">Объект: </ItemTitle>
                {placesData.map(({img, text}, index) => (
                    <WrapperObject direction='column' key={index}>
                        <RadioObjects name="place" type="radio" value={text} onChange={handleRadioChange} bg={img} checked={place === text} />
                        <H3Small color='primary' weight='300' align='center'>{text}</H3Small>
                    </WrapperObject>
                ))}
            </LabelObjects>
            <LabelObjects items='center'>
                <ItemTitle weight='300' color="#000">Общая площадь помещения: </ItemTitle>
                <InputRange type="range" name="range" onChange={handleRangeChange} value={range} id="" min={1} max={100} />
                <InputMeters type="text" name="range"  value={range} onChange={handleRangeChange} />
                <H3Small weight='300' color="primary">м2</H3Small>
            </LabelObjects>
        </StepsForm>
    )
}