import { Hero, WrapperText, WrpapperImg, HeroContainer, Info, InfoCard, Dote, HeroImg } from "./HeroMain.styled"
import { H1, FontDark ,ParagraphHuge, PrimaryButtonP, H4, Line } from "components/Global.styled"
import line from '../../../images/Line.svg'
import dote from '../../../images/Dote.svg'
import heroImg from '../../../images/hero-img.png'


export function HeroMain() {
    return (
        <Hero>
            <HeroContainer>
                <WrapperText>
                    <H1> <FontDark>Подбор и монтаж</FontDark> электро-водяного пола в вашем доме за 3 дня</H1>
                    <ParagraphHuge color="primary">
                        <Line src={line} alt="" /> {''}
                        с гарантией до 10 лет, рассрочкой платежаи бесплатным расчетом сметы и сроков
                    </ParagraphHuge>
                    <PrimaryButtonP>
                        Калькулятор отопления
                    </PrimaryButtonP>
                    <Info>
                        <InfoCard>
                            <Dote  src={dote} alt="" />
                            <H4 weight='400'> <FontDark>Более 50 лет</FontDark> срок службы</H4>
                        </InfoCard>
                        <InfoCard>
                            <Dote src={dote} alt="" /> 
                            <H4 weight='400'> <FontDark>Экономия до 20%</FontDark> на электроэнергии</H4>
                        </InfoCard>
                        <InfoCard>
                            <Dote src={dote} alt="" />
                            <H4 weight='400'> <FontDark>Ремонтируемый</FontDark> теплый пол</H4>
                        </InfoCard>
                    </Info>
                </WrapperText>
                <WrpapperImg>
                    <HeroImg src={heroImg} />
                </WrpapperImg>
            </HeroContainer>
        </Hero>
    )
}