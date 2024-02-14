import { useState } from "react";
import { SlidesComponent, SlidesCategory } from "./SlidesList.styled";
import { SlideItem } from "../SlideItem/SlideItem";
import { SecondaryButton, ActiveButton } from "components/Global.styled";

export function SlidesList({slidesData}) {
    const [section, setSection] = useState('Экономия электроэнергии')
    const [active, setActive] = useState('Экономия электроэнергии')

    function handleChangeSection(category) {
        setSection(category)
        setActive(category)
    }

    return (
        <SlidesComponent>
            <SlidesCategory>
                {slidesData.map(({category}) => {
                    return active === category ? (
                        <ActiveButton
                        key={category}
                        onClick={() => {handleChangeSection(category)}} >
                            {category}
                        </ActiveButton>
                    ) : (
                        <SecondaryButton
                        key={category}
                        onClick={() => {handleChangeSection(category)}} >
                            {category}
                        </SecondaryButton>
                    )
                })}
            </SlidesCategory>

            {slidesData.map(({category, img, title, text, list}) => {
                if (section === category) {
                    return (
                        <SlideItem 
                        key={title}
                        img={img}
                        title={title} 
                        text={text}
                        list={list}
                        />
                    )
                }
            })}
        </SlidesComponent>
    )
} 