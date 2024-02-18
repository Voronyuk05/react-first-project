import { StatisticTable } from "./StatisticTable/StatisticTable";
import { DetailsComponent, Content, BuilderImg, StatisticInfo, StatisticTitle, StatisticText, Addition } from "./Details.styled";
import { H2, FontDark, Paragraph, OrangeButton, H3 } from "components/Global.styled";
import { BottomBar } from "./BottomBar/BottomBar";
import builderIcon from '../../../images/builder.png'

export function Details() {
    return (
        <DetailsComponent>
            <Content>
                <StatisticInfo>
                    <StatisticTitle>
                        <H2 color="white" weight='300' transform='uppercase'><FontDark>Смотрим в будущее</FontDark> Оценка в 10 лет </H2>
                    </StatisticTitle>
                    <StatisticText>
                        <Paragraph weight='400' color="white">
                            Рассмотрим временной отрезок длинною в 10 лет. Из расчета средней потребности в отоплении в 7 месяцев (210 дней) мы можем для ориентира выделить общее потребление в 26 000 КВт/ч. 
                            <br />
                            <br />
                            Давайте посмотрим на цифры в таблице.
                        </Paragraph>
                    </StatisticText>
                    <StatisticTable />
                    <Addition>
                        <H3 weight='700' color="white">Если ваш город не представлен в таблице, мы подготовим для вас персональный расчет </H3>
                        <OrangeButton weight='500'>Рассчет для моего города</OrangeButton>
                    </Addition>
                </StatisticInfo>
                <BuilderImg  src={builderIcon}/>
            </Content>
            <BottomBar />
        </DetailsComponent>
    )
}