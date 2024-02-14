import { StepsItem } from "../StepItem/StepItem";
import { List } from "./StepsList.styled";

export function StepsList({stepsData}) {
    return (
        <List>
            {stepsData.map(({img, title, text, button}) => (
                <StepsItem key={title} img={img} title={title} text={text} button={button}/>
            ))}
        </List>
    )
}