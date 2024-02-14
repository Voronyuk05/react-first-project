import styled from "styled-components";
import catalougeBg from '../../../images/catalogue-bg.png'

export const StatisticsComponent = styled.section`
    width: 100%;
    height: 36.4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${catalougeBg});
    @media screen and (max-width: 992px) {
        height: 120vw;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media screen and (max-width: 576px) {
        height: 180vw;
    }
`