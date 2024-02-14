import { CatalougeComponent, CatalogueContainer, CatalogueImg, CatalogueText } from "./Catalogue.styled";
import { H2, FontDark, ParagraphHuge, Line, PrimaryButtonP, MediaIcon } from "components/Global.styled";
import catalogueMain from '../../../images/catalogue-main-img.png'
import line from '../../../images/Line.svg'
import telegramIcon from '../../../images/catalogue-telegram.png'
import whatsappIcon from '../../../images/catalogue-whatsapp.png'
import viberIcon from '../../../images/catalogue-viber.png'

export function Catalogue() {
    return (
        <CatalougeComponent>
            <CatalogueContainer>
                <CatalogueText>
                    <H2 weight='300' align='start' color="white"> Получите прямо сейчас  <FontDark>каталог XL PIPE</FontDark> с подробной информацией о системе</H2>
                    <ParagraphHuge color="white">
                        <Line src={line} alt="" /> {''}
                        выберите удобный для себя мессенджер 
                    </ParagraphHuge>
                    <PrimaryButtonP> <MediaIcon src={telegramIcon} /> telegram</PrimaryButtonP>
                    <PrimaryButtonP> <MediaIcon src={whatsappIcon} /> what’s app</PrimaryButtonP>
                    <PrimaryButtonP> <MediaIcon src={viberIcon} /> viber</PrimaryButtonP>
                </CatalogueText>
                <CatalogueImg src={catalogueMain} />
            </CatalogueContainer>
        </CatalougeComponent>
    )
}