import { H3 } from "components/Global.styled";
import styled from "styled-components";

export const AboutUsMainComponent = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(68,60,73);
    background: linear-gradient(180deg, rgba(68,60,73,1) 0%, rgba(95,78,106,1) 100%);
` 

export const AboutUsHeroContainer = styled.div`
    height: 44.2vw;
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 992px) {
        height: 120vw;
        flex-direction: column;
        gap: 8vw;
    }

    @media screen and (max-width: 576px) {
        height: 180vw;
    }

    @media screen and (max-width: 380px) {
        height: 240vw;
        gap: 15vw;
    }
`

export const HeroText = styled.div`
    width: 31vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2vw;
    @media screen and (max-width: 992px) {
        gap: 3vw;
        width: 90vw;
        align-items: center;
        h2 {
            text-align: center;
        }
    }

    @media screen and (max-width: 576px) {
        gap: 5vw;
    }

    @media screen and (max-width: 380px) {
        width: 99vw;
        gap: 10vw;
    }
`

export const ListOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5vw;

    @media screen and (max-width: 992px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2vw;
        h3 {
            width: 100%;
            text-align: center;
        }
    }

    @media screen and (max-width: 380px) {
        gap: 4vw;
    }
    
`

export const OptionsItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5vw;

    @media screen and (max-width: 992px) {
        h3 {
            text-align: start;
        }
    }

    @media screen and (max-width: 380px) {
        width: 70vw;
    }
`

export const OptionImg = styled.img`
    width: 3.1vw;
    @media screen and (max-width: 992px) {
        width: 6vw;
    }

    @media screen and (max-width: 576px) {
        width: 9vw;
    }

    @media screen and (max-width: 380px) {
        width: 12vw;
    }
`

export const AboutUsHeroImg = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeroFloorsImg = styled.img`
    width: 15.6vw;
    @media screen and (max-width: 992px) {
        width: 31vw;
    }

    @media screen and (max-width: 576px) {
        width: 40vw;
    }

    @media screen and (max-width: 380px) {
        width: 45vw;
    }
`

export const HeroRadiatorsImg = styled.img`
    width: 14.4vw;

    @media screen and (max-width: 992px) {
        width: 29vw;
    }

    @media screen and (max-width: 576px) {
        width: 37vw;
    }

    @media screen and (max-width: 380px) {
        width: 41vw;
    }
`


export const TemperatureComponent = styled.div`
    position: absolute;
    height: 28.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1vw 0.2vw 1vw 0.2vw;
    justify-content: space-between;
    width: 1.8vw;
    border: none;
    border-radius: 2vw;
    background: linear-gradient(0deg, #9ADDEB 0%, #D3FCD8 25%, #FFEB7F 50%, #F9B667 75%, #E54141 100%);
    @media screen and (max-width: 992px) {
        width: 3.6vw;
        height: 55vw;
        padding: 2vw 0.4vw 2vw 0.4vw;
    }

    @media screen and (max-width: 576px) {
        width: 5vw;
        height: 75vw;
        border-radius: 4vw;
    }

    @media screen and (max-width: 380px) {
        width: 7vw;
        height: 85vw;
    }
`

export const TemperatureSpan = styled.span`
    width: 1.7vw;
    height: 1.7vw;
    background: white;
    color: #9A9A9A;
    opacity: 1;
    font-size: 0.8vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 600;
    font-family: Rubik;

    @media screen and (max-width: 992px) {
        width: 3.4vw;
        height: 3.4vw;
        font-size: 1.6vw;
    }

    @media screen and (max-width: 576px) {
        width: 5vw;
        height: 5vw;
        font-size: 2.4vw;
    }

    @media screen and (max-width: 380px) {
        width: 7vw;
        height: 7vw;
        font-size: 3.5vw;
    }
`