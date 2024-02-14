import {CardItem} from './CardItem/CardItem.jsx'
import { CharterComponent, Title, CardsContainer, SubTitle } from "./Charter.styled";
import {ContainerColumn, H2, FontDark, FontPrimary, ParagraphHuge} from "components/Global.styled";
import key from '../../../images/key.png'
import wire from '../../../images/wire.png'
import moneyBox from '../../../images/money-box.png'
import list from '../../../images/list.png'
import planete from '../../../images/planete.png'

const CardsList = [
    {
        title: '5+ лет опыта',
        text: 'у каждого специалиста по монтажу',
        img: 'https://cdn-icons-png.flaticon.com/512/4228/4228953.png'
    },
    {
        title: 'Проект',
        text: 'Подготавляваем проект для каждого заказчика',
        img: key
    },
    {
        title: 'Материалы',
        text: 'Сертифицированы и имеют патент и паспорт качества',
        img: wire
    },
    {
        title: 'Цена',
        text: 'не отличается ни на копейку от договорной',
        img: moneyBox
    },
    {
        title: 'кредит',
        text: 'при необходимости оформляется кредитный договор',
        img: list
    },
    {
        title: 'Доставка',
        text: 'в любую точку страны через официальных дилеров Daewoo Enertec',
        img: planete
    },
]

export function Charter() {
    return (
        <CharterComponent>
            <ContainerColumn>
                <Title>
                    <H2 weight='300' align='center' color="primary"><FontPrimary>XL PIPE</FontPrimary> - система отопления из Южной Кореи с 2010 года</H2>
                </Title>
                <CardsContainer>
                    {CardsList.map(({title, text, img}) => (
                        <CardItem key={title} title={title} text={text} img={img} />
                    ))}
                </CardsContainer>
                <SubTitle>
                    <H2 weight='300' align='center' color="primary">Экономьте <FontDark>до 20%</FontDark> денежных стредств на энергоресурсы в <FontDark>отопительный сезон</FontDark></H2>
                </SubTitle>
            </ContainerColumn>
        </CharterComponent>
    )
}