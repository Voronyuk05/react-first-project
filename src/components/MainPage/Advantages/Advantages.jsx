import { AdvantagesComponent, Title  } from "./Advantages.styled";
import { ContainerColumn, H2, FontDark } from "components/Global.styled";
import { SlidesList } from "./SlidesList/SlidesList";
import { Contact } from "./Contact/Contact";
import { slidesData } from './SlidesData.jsx'

export function Advantages() {
    return (
        <AdvantagesComponent>
            <ContainerColumn>
                <Title>
                    <H2 weight='300'><FontDark>Преимущества </FontDark>теплого пола <FontDark>XL PIPE</FontDark></H2>
                </Title>
                <SlidesList slidesData={slidesData} />
                <Contact />
            </ContainerColumn>
        </AdvantagesComponent>
    )
}