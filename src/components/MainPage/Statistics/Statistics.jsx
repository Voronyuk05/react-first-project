import { StatisticsList } from "./StatisticsList/StatisticsList";
import { statisticsData } from "./StatisticsData";
import { StatisticsComponent } from "./Statistics.styled";
import { H2, FontDark, ContainerColumn } from "components/Global.styled";

export function Statistics() {
    return (
        <StatisticsComponent>
            <ContainerColumn>
                <H2 weight='300' color='white'>Статистика наших <FontDark>успехов</FontDark></H2>
                <StatisticsList statisticsData={statisticsData} />
            </ContainerColumn>
        </StatisticsComponent>
    )
}