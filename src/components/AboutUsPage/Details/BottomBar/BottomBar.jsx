import { BottomBarComponent, TextContainer } from "./BottomBar.styled"
import { LightButton, Paragraph } from "components/Global.styled"

export function BottomBar() {
    return (
        <BottomBarComponent>
            <TextContainer>
                <Paragraph color="white" weight='500'>
                    Проанализировав данные из таблицы, мы обратили внимание, что при низких изначальных вложениях в электроотопление XL-Pipe, на дистанции в 10 лет получается весьма выгодным вложением. На этом плюсы не заканчиваются. Расскажем вам больше, на личной консультации. 
                </Paragraph>
                </TextContainer>
                <LightButton>
                    Получить консультацию
                </LightButton>
        </BottomBarComponent>
    )
}