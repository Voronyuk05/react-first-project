import styled from "styled-components";

export const SlideItem = styled.div`
    width: 27vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1vw;
`

export const ItemImg = styled.img`
    height: 16vw;
`

export const ItemTitlePrimary = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0.5vw 3vw 0.5vw 0.8vw; 
    background-color: #8963A7;
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
`

export const ListItem = styled.li`
    display: list-item;
    &::marker {
        font-size: 0.7vw;
        color: black;
    }
`