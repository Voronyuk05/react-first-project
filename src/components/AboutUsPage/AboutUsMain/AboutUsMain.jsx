import { AboutUsMainComponent, AboutUsHeroContainer, AboutUsHeroImg, TemperatureComponent, TemperatureSpan, HeroFloorsImg, HeroRadiatorsImg, HeroText, ListOptions, OptionsItem, OptionImg } from "./AboutUsMain.styled"
import { H2, ItemTitle, OrangeButton, H3, H3Small, H5 } from "components/Global.styled"
import floorsImg from '../../../images/floors.png'
import radiatorsImg from '../../../images/radiators.png'
import Mansion from '../../../images/options-mansion.png'
import Factory from '../../../images/options-factory.png'
import Mortgage from '../../../images/options-mortgage.png'


export function AboutUsMain() {
    return (
        <AboutUsMainComponent>
            <AboutUsHeroContainer>
                <HeroText>
                    <H2 color="white" transform='uppercase' weight='700'>
                        Установить отопление от электричества и сэкономить 300.000 рублей
                        <ItemTitle weight='400'>или вложиться и провести газ? </ItemTitle>
                    </H2>
                    <ListOptions>
                        <H3 weight='700' color="white">Подберем отопление для:</H3>
                        <OptionsItem>
                            <OptionImg src={Mansion} />
                            <H3Small color="white" weight='700' >Частных домов <H5 weight='500'>и коттедженых городков</H5></H3Small>
                        </OptionsItem>
                        <OptionsItem>
                            <OptionImg src={Factory} />
                            <H3Small color="white" weight='700'>Промышленных <H5 weight='500'>и производственных зданий</H5></H3Small>
                        </OptionsItem>
                        <OptionsItem>
                            <OptionImg src={Mortgage} />
                            <H3Small color="white" weight='700'>Объектов малого <H5 weight='500'>и среднего бизнеса</H5></H3Small>
                        </OptionsItem>
                    </ListOptions>
                    <OrangeButton>
                        Получить консультацию
                    </OrangeButton>
                </HeroText>
                <AboutUsHeroImg>
                    <HeroRadiatorsImg src={radiatorsImg}/>
                    <TemperatureComponent>
                        <TemperatureSpan>
                            +25
                        </TemperatureSpan>
                        <TemperatureSpan>
                            +22
                        </TemperatureSpan>
                        <TemperatureSpan>
                            +20
                        </TemperatureSpan>
                        <TemperatureSpan>
                            +18
                        </TemperatureSpan>
                    </TemperatureComponent>
                    <HeroFloorsImg src={floorsImg}/>
                </AboutUsHeroImg>
            </AboutUsHeroContainer>
        </AboutUsMainComponent>
    )
}