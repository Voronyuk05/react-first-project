import styled from "styled-components";

export const StepsComponent = styled.section`
    width: 100%;
    height: 54.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 992px) {
        height: 140vw;
    }

    @media screen and (max-width: 576px) {
        height: 470vw;
        div {
            height: 480vw;
            align-items: center;
            justify-content: center;
        }
    }
`
