import { List } from "./TimesList.styled";
import { TimesItem } from "../TimesItem/TimesItem";
export function TimesList({termoregulationData}) {
    return (
        <List>
            {termoregulationData.map(({time, text, degrees, eclipse, backgroung, type}) => (
                <TimesItem 
                key={time}
                time={time} 
                text={text} 
                degrees={degrees} 
                eclipse={eclipse}
                backgroung={backgroung}
                type={type} />
            ))}
        </List>
    )
}