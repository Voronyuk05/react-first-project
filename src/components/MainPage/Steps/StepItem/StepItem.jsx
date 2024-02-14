import { Item, ItemImg } from "./StepItem.styled";
import { H3, H4Huge, WhiteButton } from "components/Global.styled";
export function StepsItem({img, title, text, button}) {
    return (
        <Item>
            <ItemImg src={img}/>
            <H3 color="white" align='center'>{title}</H3>
            <H4Huge align='center' color='white' weight='300'>{text}</H4Huge>
            {button ? (
                <WhiteButton>
                    Оставить заявку
                </WhiteButton>
            ) : null}
        </Item>
    )
}