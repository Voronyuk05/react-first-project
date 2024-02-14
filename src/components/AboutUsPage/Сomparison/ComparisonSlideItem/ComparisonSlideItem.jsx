import { H3, Paragraph, H3Small } from "components/Global.styled"
import { SlideItem, ItemImg, ItemTitle, ItemTitlePrimary, SlideList, ListItem } from "./ComparisonSlideItem.styled"

export function ComparisonSlideItem({index, img, title, paragraph, list}) {

    return (
        <SlideItem>
            <ItemImg src={img} />
            {index === 1 ? (
                <ItemTitlePrimary>
                    <H3 color="white" weight='700'>{title}</H3>    
                </ItemTitlePrimary>
            ) : (
                <ItemTitle>
                    <H3 color="black" weight='700' align='start'>{title}</H3>
                </ItemTitle>
            )}
            {paragraph ?  (
                <Paragraph>{paragraph}</Paragraph>
            ) : null
            }
            {list ? (
                <SlideList>
                    {list.map(listText => (
                        <ListItem>
                            <H3Small weight='400'>{listText}</H3Small>
                        </ListItem>
                    ))}
                </SlideList>
            ) : null}
        </SlideItem>
    )
}