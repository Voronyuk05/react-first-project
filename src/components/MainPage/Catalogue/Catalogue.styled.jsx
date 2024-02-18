import styled from "styled-components";
import catalougeBg from '../../../images/catalogue-bg.png'
import catalogueEclipse from '../../../images/catalouge-ellipse.png'

export const CatalougeComponent = styled.section`
    width: 100%;
    height: 36.4vw;
    background-image: url(${catalougeBg});
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 992px) {
        height: 60vw;
    }

    @media screen and (max-width: 576px) {
        height: 160vw;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media screen and (max-width: 380px) {
        height: 200vw;
    }
`
export const CatalogueContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2.6vw;
    background-image: url(${catalogueEclipse});
    background-repeat: no-repeat;
    background-position: 41vw;
    background-size: contain;
    @media screen and (max-width: 992px) {
        gap: 5vw;
        background-position: 45vw;
    }

    @media screen and (max-width: 576px) {
        flex-direction: column;
        background-position: 0vw 50vw;
        gap: 14vw;
    }

`

export const CatalogueText = styled.div`
    width: 30vw;
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
    @media screen and (max-width: 992px) {
        width: 45vw;
        p {
            text-align: start;
        }
    }

    @media screen and (max-width: 576px) {
        width: 90vw;
        align-items: center;
        justify-content: center;
        gap: 2vw;
        h2,p {
            text-align: center;
        }
    }
`

export const CatalogueImg = styled.img`
    width: 36.5vw;
    @media screen and (max-width: 992px) {
        width: 45vw;
    }

    @media screen and (max-width: 576px) {
        width: 90vw;
    }

    @media screen and (max-width: 380px) {
        width: 100vw;
    }
`