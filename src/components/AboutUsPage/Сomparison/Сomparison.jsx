import { СomparisonComponent, СomparisonContainer, Title, Slides } from "./Сomparison.styled";
import { H2, FontPrimary } from "components/Global.styled";
import {  expensesData, paymentData, factsData  } from "./ComparisonData";
import { ComparisonSlide } from "./ComparisonSlide/ComparisonSlide";

export function Сomparison() {
    return (
        <СomparisonComponent>
            <СomparisonContainer>
                <Title>
                    <H2 color="primary" transform='uppercase' weight='700'>Разница между <FontPrimary>газовым</FontPrimary> и <FontPrimary>электрическим</FontPrimary> отоплением </H2>
                </Title>
                <Slides>
                        <ComparisonSlide slideData={expensesData} />
                        <ComparisonSlide slideData={paymentData} bgc='#EDEDED' />
                        <ComparisonSlide slideData={factsData} />
                </Slides>
            </СomparisonContainer>
        </СomparisonComponent>
    )
}