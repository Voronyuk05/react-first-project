import { Item, Text, EclipseImg, SubText } from "./StatisticsItem.styled";
import { H2, H2Huge, Paragraph } from "components/Global.styled";

export function StatisticsItem({stats, measure, text, img}) {
    return (
        <Item>
            <EclipseImg src={img} />
            <Text>
                <H2Huge weight='700' align='start' color='white'>{stats} <SubText>{measure}</SubText></H2Huge>
                <Paragraph weight='300' color="white" >
                    {text}
                </Paragraph>
            </Text>
        </Item>
    )
}