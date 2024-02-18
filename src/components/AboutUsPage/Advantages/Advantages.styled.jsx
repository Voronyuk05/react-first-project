import styled from "styled-components";
import fullHouseIcon from '../../../images/full-house.png'
import systemHouseIcon from '../../../images/system-house.png'

export const AdvantagesComponent = styled.section`
    width: 100%;
    height: 71.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F3F3F3;
    @media screen and (max-width: 992px) {
        height: 120vw;
    }

    @media screen and (max-width: 576px) {
        height: 330vw;
    }

    @media screen and (max-width: 380px) {
        height: 450vw;
    }
`

export const AdvantagesContainer = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3vw;
    @media screen and (max-width: 992px) {
        width: 100%;
        gap: 6vw;
    }
` 

export const AdvantagesTitle = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4vw;
    @media screen and (max-width: 576px) {
        width: 95vw;
    }

    @media screen and (max-width: 380px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const LogoImg = styled.img`
    width: 16vw;
    @media screen and (max-width: 992px) {
        width: 30vw;
    }

    @media screen and (max-width: 576px) {
        width: 45vw;
    }

    @media screen and (max-width: 380px) {
        width: 60vw;
    }
`

export const TitleText = styled.div`
    width: 40vw;
    box-sizing: border-box;
    padding: 0.5vw 0.8vw 0.5vw 0.8vw; 
    background-color: #8963A7;
    @media screen and (max-width: 576px) {
        width: 45vw;
    }

    @media screen and (max-width: 380px) {
        width: 85vw;
        padding: 2vw 2.5vw 2vw 2.5vw; 
    }
`

export const AdvantagesContent = styled.div`
    height: 52vw;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 2vw;
    @media screen and (max-width: 992px) {
        height: 80vw;
        width: 100%;
        justify-content: flex-start;
        padding-left: 3vw;
        box-sizing: border-box;
    }

    @media screen and (max-width: 576px) {
        height: 280vw;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10vw;
    }

    @media screen and (max-width: 380px) {
        height: 370vw;
    }
`

export const HouseImg = styled.div`
    height: 52vw;
    width: 35vw;
    background-image: url(${systemHouseIcon});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 992px) {
        height: 80vw;
        width: 52vw;
    }

    @media screen and (max-width: 576px) {
        width: 90vw;
        background-image: url(${fullHouseIcon});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
`

export const AdvantagesList = styled.ul`
    width: 21vw;
    padding-left: 3vw;
    margin: 0px;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    @media screen and (max-width: 992px) {
        width: 25vw;
    }

    @media screen and (max-width: 576px) {
        width: 70vw;
        gap: 5vw;
        h3 {
            font-size: 5vw;
        }
    }

    @media screen and (max-width: 380px) {
        h3 {
            font-size: 6vw;
        }
    }
`

export const ItemList = styled.li`
    width: 100%;
    margin: 0;
    padding-left: 0.3vw;
    position: relative;
    &::marker {
        content: '★';
        color: #9599B3;
        font-size: 2vw;
        line-height: 2vw;
    }

    @media screen and (max-width: 576px) {
        &::marker {
            font-size: 6vw;
        }
    }

    @media screen and (max-width: 380px) {
        &::marker {
            font-size: 8vw;
        }
    }
`