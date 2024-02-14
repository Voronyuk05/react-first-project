import styled from "styled-components";

export const Item = styled.li`
    width: 17.5vw;
    height: 10.6vw;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    position: relative;
    padding-top: 3vw;
    box-sizing: border-box;
    @media screen and (max-width: 992px) {
        width: 30vw;
        height: 20vw;
        padding-top: 5vw;
        padding-right: 1vw;
    }

    @media screen and (max-width: 576px) {
        width: 40vw;
        height: 30;
        margin-top: 2vw;
    }
`

export const Text = styled.div`
    width: 13.7vw;
    z-index: 3;
    @media screen and (max-width: 992px) {
        width: 24vw;
        height: 20vw;
    }

    @media screen and (max-width: 576px) {
        width: 30vw;
        height: 26vw;
        margin-top: 4vw;
    }
`

export const EclipseImg = styled.img`
    top: 0;
    left: 0;
    width: 7.3vw;
    position: absolute;
    @media screen and (max-width: 992px) {
        width: 12vw;
    }

    @media screen and (max-width: 576px) {
        width: 18vw;
    }
`

export const SubText = styled.span`
    font-size: 1.9vw;
    @media screen and (max-width: 992px) {
        font-size: 3.8vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 4vw;
    }
`