import { ComparisonSlideComponent } from "./ComparisonSlide.styled"
import { ComparisonSlideItem } from "../ComparisonSlideItem/ComparisonSlideItem"

export function ComparisonSlide({slideData, bgc}) {
    return (
        <ComparisonSlideComponent bgc={bgc}>
            {slideData.map(({img, title, paragraph, list}, index) => (
                <ComparisonSlideItem key={index} 
                index={index} 
                img={img} 
                title={title}
                paragraph={paragraph}
                list={list} />
            ))}
        </ComparisonSlideComponent>
    )
}