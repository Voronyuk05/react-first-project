import { termoregulationData } from "./TermoregulationData";
import { TimesList } from "./TimesList/TimesList";
import { TermoregulationComponent, Title, Security, DocumentImg, Information } from "./Termoregulation.styled";
import { ContainerColumn, H2, FontDark, H3Huge, PrimaryButtonP, Paragraph } from "components/Global.styled";
import document from '../../../images/document.png'

export function Termoregulation() {
    return (
        <TermoregulationComponent>
            <ContainerColumn>
                <Title>
                <H2 weight='300' color="primary" align='center' >Автоматическое <FontDark>управление отоплением</FontDark> через терморегулятор</H2>
                </Title>
                <TimesList termoregulationData={termoregulationData}/>
                <Security>
                    <DocumentImg src={document} />
                    <Information>
                        <H3Huge weight='500' color="primary">Ваше тепло под надежным контролем</H3Huge>
                        <Paragraph color='primary' weight='300'>
                        Мы предоставляем <FontDark>гарантию до 10 лет</FontDark> на все работы и <FontDark>до 50 лет на материалы XL PIPE.</FontDark>
                        Вы получаете надежную систему, а также техническую поддержку на протяжэении всего эксплуатационного периода. Мы всегда на связи и поможем с любыми вопросами!
                        <br />
                        <br />
                        <FontDark>Срок службы наших теплых полов - 50 лет</FontDark>
                        </Paragraph>
                        <PrimaryButtonP>
                            патент, сертификаты и лицензия
                        </PrimaryButtonP>
                    </Information>
                </Security>
            </ContainerColumn>
        </TermoregulationComponent>
    )
}