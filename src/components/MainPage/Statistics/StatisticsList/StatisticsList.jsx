import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
import { List } from "./StatisticsList.styled";

export function StatisticsList({statisticsData}) {
    return (
        <List>
            {statisticsData.map(({stats,measure, text, img}) => (
                <StatisticsItem key={stats} stats={stats} measure={measure} text={text} img={img} />
            ))}
        </List>
    )
}