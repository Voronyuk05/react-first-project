import styled from "styled-components";

export const TermoregulationComponent = styled.section`
    width: 100%;
    height: 49.2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--xl-pipe-bg, #EDEDED);
    @media screen and (max-width: 992px) {
        height: 140vw;
    }

    @media screen and (max-width: 576px) {
        height: 230vw;
    }
    @media screen and (max-width: 380px) {
        height: 320vw;
    }
`

export const Title = styled.div`
    width: 41.5vw;
    @media screen and (max-width: 992px) {
        width: 80vw;
    }

    @media screen and (max-width: 380px) {
        width: 90vw;
    }
`

export const Security = styled.div`
    width: 43.5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 992px) {
        width: 80vw;
    }

    @media screen and (max-width: 576px) {
        width: 90vw;
        flex-direction: column;
    }

    @media screen and (max-width: 380px) {
        width: 95vw;
    }
`
export const DocumentImg = styled.img`
    width: 11vw;
    @media screen and (max-width: 992px) {
        width: 20vw;
    }

    @media screen and (max-width: 576px) {
        width: 40vw;
    }

    @media screen and (max-width: 380px) {
        width: 60vw;
    }
`

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1vw;
    @media screen and (max-width: 992px) {
        gap: 2vw;
    }

    @media screen and (max-width: 576px) {
        align-items: center;
        gap: 3vw;
        p {
            text-align: center;
        }
    }
`