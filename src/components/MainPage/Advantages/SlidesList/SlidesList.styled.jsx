import styled from 'styled-components';

export const SlidesComponent = styled.div`
    width: 78.1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.2vw;
    @media screen and (max-width: 992px) {
        width: 90vw;
    }

    @media screen and (max-width: 380px) {
        height: 260vw;
    }
`

export const SlidesCategory = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.8vw;

    @media screen and (max-width: 380px) {
        flex-direction: column;
        gap: 2vw;
    }
`