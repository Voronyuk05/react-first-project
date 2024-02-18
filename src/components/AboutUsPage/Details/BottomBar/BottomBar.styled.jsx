import styled from "styled-components";

export const BottomBarComponent = styled.div`
    height: 11.3vw;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #443C49;
    gap: 10vw;
    @media screen and (max-width: 992px) {
        height: 25vw;
    }

    @media screen and (max-width: 576px) {
        height: 40vw;
        flex-direction: column;
        gap: 6vw;
    }

    @media screen and (max-width: 380px) {
        height: 70vw;
        align-items: flex-start;
        padding-left: 5vw;
        box-sizing: border-box;
    }
`

export const TextContainer = styled.div`
    width: 40vw;
    @media screen and (max-width: 992px) {
        width: 50vw;
    }

    @media screen and (max-width: 576px) {
        text-align: center;
        width: 90vw;
    }

    @media screen and (max-width: 380px) {
        text-align: start;
    }
`