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
`

export const HeroText = styled.div`
    width: 31vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2vw;
`

export const ListOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5vw;
`

export const OptionsItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5vw;
`

export const OptionImg = styled.img`
    width: 3.1vw;
`

export const AboutUsHeroImg = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeroFloorsImg = styled.img`
    width: 15.6vw;
`

export const HeroRadiatorsImg = styled.img`
    width: 14.4vw;
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
`