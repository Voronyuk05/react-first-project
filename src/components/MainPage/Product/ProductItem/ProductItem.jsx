import { Item, ListText, ItemList, ItemLogo } from "./ProductItem.styled";
import { WhiteButton, Paragraph, Tag } from "components/Global.styled";

export function ProductItem({img, tag, list}) {
    return (
        <Item>
            <ItemLogo src={img}/>
            <Tag>{tag}</Tag>
            <ItemList>
                {list.map(({text}) => (
                    <ListText>
                        <Paragraph weight='300' opacity='0.7' color='white' >{text}</Paragraph>
                    </ListText>
                ))}
            </ItemList>
            <WhiteButton>Оставить заявку</WhiteButton>
        </Item>
    )
}