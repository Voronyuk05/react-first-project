import styled from "styled-components";
import star from '../../../images/star.png'

export const AdvantagesComponent = styled.section`
    width: 100%;
    height: 71.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F3F3F3;
`

export const AdvantagesContainer = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3vw;
` 

export const AdvantagesTitle = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4vw;
`

export const LogoImg = styled.img`
    width: 16vw;
`

export const TitleText = styled.div`
    width: 40vw;
    box-sizing: border-box;
    padding: 0.5vw 0.8vw 0.5vw 0.8vw; 
    background-color: #8963A7;
`

export const AdvantagesContent = styled.div`
    height: 52vw;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 2vw;
`

export const HouseImg = styled.img`
    height: 52vw;
`

export const AdvantagesList = styled.ul`
    width: 21vw;
    padding-left: 3vw;
    margin: 0px;
    display: flex;
    flex-direction: column;
    gap: 1vw;
`

export const ItemList = styled.li`
    width: 100%;
    margin: 0;
    padding-left: 0.3vw;
    &::marker {
        content: '★';
        color: #9599B3;
        font-size: 2vw;
        line-height: 2vw;
    }
`