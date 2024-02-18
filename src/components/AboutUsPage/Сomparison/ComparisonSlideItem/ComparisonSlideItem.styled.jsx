import styled from "styled-components";

export const SlideItem = styled.div`
    width: 27vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1vw;

    @media screen and (max-width: 992px) {
        width: 42vw;
        gap: 2vw;
    }

    @media screen and (max-width: 576px) {
        p {
            font-size: 3.2vw;
        }
    }

    @media screen and (max-width: 380px) {
        width: 90vw;
        p {
            font-size: 5.5vw;
        }
    }
`

export const ItemImg = styled.img`
    height: 16vw;
    @media screen and (max-width: 992px) {
        height: 32vw;
    }

    @media screen and (max-width: 576px) {
        height: 42vw;
    }

    @media screen and (max-width: 380px) {
        height: 80vw;
    }
`

export const ItemTitlePrimary = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0.5vw 3vw 0.5vw 0.8vw; 
    background-color: #8963A7;
    @media screen and (max-width: 992px) {
        padding: 1vw 6vw 1vw 1.6vw; 
    }

`

export const ItemTitle = styled.div`
    width: 100%;
    box-sizing: border-box;
`

export const SlideList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.2vw;
    margin: 0px;
    padding-left: 2.5vw;

    @media screen and (max-width: 576px) {
        gap: 1vw;
    }
`

export const ListItem = styled.li`
    display: list-item;
    &::marker {
        font-size: 0.7vw;
        color: black;
    }
    @media screen and (max-width: 992px) {
        &::marker {
            font-size: 1.5vw;
        }
    }

    @media screen and (max-width: 576px) {
        
        h3 {
            text-align: start;  
        }
        &::marker {
            font-size: 2vw;
        }
    }
`