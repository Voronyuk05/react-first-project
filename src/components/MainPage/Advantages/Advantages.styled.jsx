import styled from 'styled-components';


export const AdvantagesComponent = styled.section`
    height: 65.4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 992px) {
        height: 130vw;
    }
    @media screen and (max-width: 576px) {
        height: 340vw;
    }

    @media screen and (max-width: 380px) {
        height: 500vw;
    }
`
export const Title = styled.div`
    width: 36.4vw;
    @media screen and (max-width: 992px) {
        width: 70vw;
    }

    @media screen and (max-width: 576px) {
        width: 90vw;
    }

    @media screen and (max-width: 380px) {
        h2 {
            text-align: center;
        }
    }
`