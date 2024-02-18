import styled from 'styled-components';
import heroBg from '../../../images/hero-bg.png'

export const Hero = styled.section`
    margin-top: 7vw;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;   
    @media screen and (max-width: 992px) {
        height: 70vw;
    }

    @media screen and (max-width: 576px) {
        height: 90vw;
    }

    @media screen and (max-width: 380px) {
        height: 170vw;
    }
`

export const HeroContainer = styled.div`
    width: 74.6vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    @media screen and (max-width: 992px) {
        flex-direction: column;
        width: 95vw;
        gap: 10vw;
    }
`

export const WrapperText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 34.5vw;
    gap: 0.8vw;
    @media screen and (max-width: 992px) {
        width: 75vw;
        gap: 1.4vw;
        align-items: center;
    }

    @media screen and (max-width: 576px) {
        width: 90vw;
        gap: 2.4vw;
    }

`
export const WrpapperImg = styled.div`
    width: 34.3vw;
    background: url(${heroBg})  50% / cover no-repeat;
    @media screen and (max-width: 992px) {
        width: 50vw;
    }

    @media screen and (max-width: 576px) {
        width: 70vw;
    }

    @media screen and (max-width: 380px) {
        width: 90vw;
    }
`

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 3%;
    margin-top: 1.6vw;
    @media screen and (max-width: 992px) {
        justify-content: center;
    }

    @media screen and (max-width: 380px) {
        flex-wrap: wrap;
        gap: 3vw;
        h4 {
            font-size: 4.5vw;
        }
    }
`

export const InfoCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.6vw;
    @media screen and (max-width: 992px) {
        gap: 1vw;
        justify-content: center;
    }

    
    @media screen and (max-width: 380px) {
        width: 50vw;
    }
`

export const Dote = styled.img`
    width: 1.82vw;
    @media screen and (max-width: 380px) {
        width: 4vw;
    }
`


export const HeroImg = styled.img`
    width: 30vw;
    @media screen and (max-width: 992px) {
        width: 50vw;
    }

    @media screen and (max-width: 576px) {
        width: 70vw;
    }

    @media screen and (max-width: 380px) {
        width: 90vw;
    }
`