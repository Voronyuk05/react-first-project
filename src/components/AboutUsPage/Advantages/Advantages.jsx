import { advantagesData } from "./AdvantagesData";
import { AdvantagesComponent, AdvantagesContainer, AdvantagesTitle, LogoImg, TitleText, AdvantagesContent, HouseImg, AdvantagesList, ItemList } from "./Advantages.styled";
import { H3Huge, ItemTitle, FontPrimary, FontDark } from "components/Global.styled";
import LogoSvg from '../../../images/Logo.svg'
import systemHouseIcon from '../../../images/system-house.png'

export function Advantages() {
    return (
        <AdvantagesComponent>
            <AdvantagesContainer>
                <AdvantagesTitle>
                    <LogoImg src={LogoSvg} />
                    <TitleText>
                        <H3Huge color="white" weight='500'>Система 2 в 1: отопление + теплый пол Запатентовано!</H3Huge>
                    </TitleText>
                </AdvantagesTitle>
                <AdvantagesContent>
                    <HouseImg src={systemHouseIcon} />
                    <AdvantagesList>
                        {advantagesData.map(({title, text}) => (
                            <ItemList>
                                <ItemTitle weight='400'><FontPrimary weight='700'>{title}</FontPrimary> {text}</ItemTitle>
                            </ItemList>
                        ))}
                    </AdvantagesList>
                </AdvantagesContent>
            </AdvantagesContainer>
        </AdvantagesComponent>
    )
}