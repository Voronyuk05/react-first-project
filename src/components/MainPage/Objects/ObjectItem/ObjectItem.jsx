

import { Item, Features, FeatureItem } from "./ObjectItem.styled";
import { H4Huge, Paragraph, LinkUnderline, H3Huge, H5 } from "components/Global.styled";

export function ObjectItem({title, text, features, link, background}) {

    return (
        <Item bg={background}>
            <H4Huge color='primary' weight='500'>{title}</H4Huge>
            <Paragraph color='primary'>{text}</Paragraph>
            <Features>
                {features.map(({featureTitle, featureText}) => (
                    <FeatureItem key={featureTitle} >
                        <H3Huge color='#8963A7' weight='400'>{featureTitle}</H3Huge>
                        <H5 weight='400'>{featureText}</H5>
                    </FeatureItem>
                ))}
            </Features>
            <LinkUnderline>{link}</LinkUnderline>
        </Item>
    )
}