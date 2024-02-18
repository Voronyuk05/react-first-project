import styled from "styled-components";

export const DetailsComponent = styled.section`
    width: 100%;
    height: 54.1vw;
    background: linear-gradient(120deg, rgb(138, 110, 160) 28.77%, #5F4E6A 83.28%);
    @media screen and (max-width: 992px) {
        height: 100vw;
    }

    @media screen and (max-width: 576px) {
        height: 230vw;
    }

    @media screen and (max-width: 380px) {
        height: 360vw;
    }

`

export const Content = styled.div`
    width: 100%;
    height: 42.87vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    @media screen and (max-width: 992px) {
        height: 75vw;
    }

    @media screen and (max-width: 576px) {
        height: 180vw;
        margin-bottom: 10vw;
    }

    @media screen and (max-width: 380px) {
        height: 280vw;
    }
`

export const StatisticInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 44vw;
    gap: 3vw;
    padding-bottom: 3vw;
    @media screen and (max-width: 992px) {
        align-items: center;
        width: 90vw;
        gap: 5vw;
        h3,h2,p {
            text-align: center;
        }
        p {
            font-size: 2vw;
        }
    }

    @media screen and (max-width: 576px) {
        gap: 4vw;
        h2{
            font-size: 5.6vw;
        }
        p {
            font-size: 3vw;
        }
    }

    @media screen and (max-width: 380px) {
        gap: 8vw;
        h2{
            font-size: 7vw;
        }
        p {
            font-size: 5vw;
        }
    }
`

export const StatisticTitle = styled.div`
    width: 25vw;
    @media screen and (max-width: 992px) {
        width: 75vw;
    }
`

export const StatisticText = styled.div`
    width: 31vw;
    @media screen and (max-width: 992px) {
        width: 75vw;
    }

    @media screen and (max-width: 576px) {
        width: 70vw;
    }

    @media screen and (max-width: 380px) {
        width: 90vw;
    }
`

export const BuilderImg = styled.img`
    width: 30vw;
    @media screen and (max-width: 992px) {
        display: none;
    }
    
`

export const Addition = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1vw;
    button {
        width: 13vw;
    }

    @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        button {
            width: 25vw;
        }
    }

    @media screen and (max-width: 576px) {
        button {
            width: 38vw;
        }
    }

    @media screen and (max-width: 380px) {
        width: 90vw;
        gap: 7vw;
        button {
            width: 60vw;
        }
        h3 {
            text-align: start;
        }
    }

`