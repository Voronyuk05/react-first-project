import styled from "styled-components";

export const ComparisonSlideComponent = styled.div`
    width: 100%;
    height: 41.4vw;
    background: ${({bgc}) => bgc};;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 3.5vw;
    box-sizing: border-box;
    padding: 5.72vw 0vw 5.72vw 0vw;
    @media screen and (max-width: 992px) {
        height: 82vw;
        gap: 7vw;
        padding: 10vw 0vw 10vw 0vw;
    }

    @media screen and (max-width: 576px) {
        height: 135vw;
    }

    @media screen and (max-width: 380px) {
        min-height: 340vw;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 15vw;
    }
`
