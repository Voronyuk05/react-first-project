import styled from "styled-components";

export const Slide = styled.div`
    width: 55vw;
    height: 26vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;    
    border-radius: 10px;
    background: var(--xl-pipe-white, #FFF);
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.10);
    padding: 0.5vw 2vw 0.5vw 0.5vw;
    box-sizing: border-box;
    @media screen and (max-width: 992px) {
        width: 90vw;
        height: 45vw;
    }

    
    @media screen and (max-width: 576px) {
        flex-direction: column;
        width: 90vw;
        height: 140vw;
        padding: 1vw 2vw 6vw 1vw;
    }
`

export const SlideImg = styled.img`
    width: 26vw;
    @media screen and (max-width: 992px) {
        width: 45vw;
    }

    @media screen and (max-width: 576px) {
        width: 100%;
    }
`

export const SLideText = styled.div`
    width: 24vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5vw;
    @media screen and (max-width: 992px) {
        width: 45vw;
        gap: 1vw;
    }

    @media screen and (max-width: 576px) {
        width: 90%;
        gap: 4vw;
    }
`

export const SlideList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin: 0px;
    padding: 0px;
    list-style: circle;
    @media screen and (max-width: 992px) {
        gap: 1.5vw;
        padding-left: 1vw;
    }

    @media screen and (max-width: 576px) {
        padding-left: 5vw;
    }
`

export const ListItem = styled.li`
    display: list-item;
    &::marker {
        content: 'o ';
        font-size: 1.6vw;
    }
    @media screen and (max-width: 992px) {
        &::marker {
            font-size: 2.6vw;
        }
    }

    @media screen and (max-width: 576px) {
        &::marker {
            font-size: 3.4vw;
        }
    }
`