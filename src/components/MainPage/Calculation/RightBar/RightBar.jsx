import { RigthBarComponent, Path, Text, Brackets, Chatacter } from "./RightBar.styled"
import { Paragraph, H5, FontDark, H4Huge, H4 } from "components/Global.styled"
import bracketsIcon  from '../../../../images/brackets.png'
import characterIcon from '../../../../images/charter.png'

export function RightBar({step}) {
    let stepsLeft
    if (step === 1) {
        stepsLeft = '2 шага'
    } else if (step === 2) {
        stepsLeft = '1 шаг'
    } else stepsLeft = '0 шагов'

    return (
        <RigthBarComponent>
            <Chatacter src={characterIcon} />
            <Text>
                <H4Huge color="primary">
                    Пугачев Сергей
                    <H4 weight='300'>руководитель Отопить.РФ</H4>
                </H4Huge>
                <H5 weight='300' color="primary">
                    Наши менеджеры подготовят приблизительную смету работ, исходя из ваших ответов. Не забудьте забрать скидку!
                </H5>
                <Brackets src={bracketsIcon} />
            </Text>
            <Path>
                <Paragraph color="white" weight='300'>До получения <FontDark>скидки 15%</FontDark> осталось: </Paragraph>
                <H4Huge color='white'>{stepsLeft}</H4Huge>
            </Path>
        </RigthBarComponent>
    )
}