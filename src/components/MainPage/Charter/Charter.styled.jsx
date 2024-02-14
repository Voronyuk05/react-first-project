import styled from 'styled-components';

export const CharterComponent = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--xl-pipe-bg, #EDEDED);
    height: 46.4vw;
    margin-top: 7vw;
    @media screen and (max-width: 992px) {
        height: 130vw;
    }

    @media screen and (max-width: 576px) {
        height: 280vw;
    }
`

export const Title = styled.div`
    width: 60vw;
    @media screen and (max-width: 576px) {
        width: 80vw;
    }
`

export const CardsContainer = styled.div`
    width: 59vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width: 992px) {
        width: 90vw;
        justify-content: center;
        gap: 2vw;
    }

    @media screen and (max-width: 576px) {
        gap: 4vw;
    }
`

export const SubTitle = styled.div`
    width: 60.6vw;

    @media screen and (max-width: 992px) {
        width: 80.6vw;
    }
    @media screen and (max-width: 576px) {
        width: 90vw;
    }
`