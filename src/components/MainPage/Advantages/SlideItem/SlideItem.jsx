import { Slide, SlideImg, SLideText, SlideList, ListItem } from "./SlideItem.styled"
import { H3, ParagraphDark, ItemTitle } from "components/Global.styled"
export function SlideItem({img, title, text, list}) {
        return (
            <Slide>
                <SlideImg src={img} alt="" />
                <SLideText>
                    <H3  weight='500' color='primary' align='center'>{title}</H3>
                    {text ? (
                        <ParagraphDark>{text}</ParagraphDark>
                    ) :  null}
                    <SlideList>
                        {list.map(({listTitle, listText}) => (
                            <ListItem key={listTitle}>
                                {listTitle ? (
                                    <ItemTitle weight='600' color='primary'>{listTitle}</ItemTitle>
                                ) : null}
                                <ParagraphDark>{listText}</ParagraphDark>
                            </ListItem>
                        ))}
                    </SlideList>
                </SLideText>
            </Slide>
        )
}