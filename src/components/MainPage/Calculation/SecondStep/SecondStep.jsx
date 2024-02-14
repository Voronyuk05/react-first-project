import { useState } from "react"
import { Radio, H3Small, ItemTitle, Checkbox } from "components/Global.styled"
import { StepsForm, LabelObjects, WrapperObject, WrapperInputs } from "../CalculatorForm/CalculatorForm.styled"
import { floorsData, roomsData } from "./SecondStepData"

export function SecondStep({handleChangeDate, info}) {
    const [floor, setFloor] = useState(info.floor)
    const [room, setRoom] = useState(info.room)
    const [plinth, setPlinth] = useState(info.plinth)

    function handleRadioChange(e) {
        if (e.currentTarget.name === 'floor') {
            setFloor(e.currentTarget.value)
        } else if (e.currentTarget.name === 'room') {
            setRoom(e.currentTarget.value)
        } else if (e.currentTarget.name === 'plinth') {
            setPlinth(plinth => !plinth)
            handleChangeDate('plinth', !plinth)
            return
        }
        handleChangeDate(e.currentTarget.name, e.currentTarget.value)
    }


    return (
        <StepsForm action="">
            <LabelObjects direction='column'>
                <ItemTitle weight='300' color="#000">Основное напольное покрытие:</ItemTitle>
                <WrapperInputs>
                    {floorsData.map(({text}) => (
                        <WrapperObject>
                            <Radio name="floor" type="radio" value={text} onChange={handleRadioChange} checked={floor === text}/>
                            <H3Small weight='300' color='primary'>{text}</H3Small>
                        </WrapperObject>
                    ))}
                    <WrapperObject>
                        <Checkbox name="plinth" type="radio" value={plinth}  onClick={handleRadioChange} checked={plinth === true}/>
                        <H3Small weight='300' color='primary'>+ цоколь</H3Small>
                    </WrapperObject>
                </WrapperInputs>
            </LabelObjects>

            <LabelObjects direction='column'>
                <ItemTitle weight='300' color="#000">Кол-во комнат:</ItemTitle>
                <WrapperInputs >
                    {roomsData.map(({number}) => (
                        <WrapperObject>
                            <Radio name="room" type="radio" value={number} onChange={handleRadioChange} checked={room === number}/>
                            <H3Small weight='300' color='primary'>{number}</H3Small>
                        </WrapperObject>
                    ))}
                </WrapperInputs>
            </LabelObjects>
        </StepsForm>
    )
}