import {  Card, CardImg, Text } from "./CardItem.styled";
import { H3, H4Huge } from "components/Global.styled";

export function CardItem({title, text, img}) {
    return (
        <>
            <Card>
                <Text>
                    <H3 color='primary'  weight='500' transform='uppercase'>{title}</H3>
                    <H4Huge weight='300'>{text}</H4Huge>
                </Text>
                <CardImg src={img} alt="" />
            </Card>
        </>
    )
}