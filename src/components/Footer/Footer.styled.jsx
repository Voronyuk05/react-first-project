import styled from "styled-components";

export const FooterComponent = styled.footer`
    width: 100%;
    height: 12vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5F4E6A;
    @media screen and (max-width: 992px) {
        height: 24vw;
    }
`


export const FooterContainer = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 6vw;
    @media screen and (max-width: 992px) {
        gap: 10vw;
    }
`

export const FooterLogo = styled.img`
    width: 10.4vw;
    @media screen and (max-width: 992px) {
        width: 20vw;
    }
`

export const Rights = styled.div`
    width: 19.1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 992px) {
        width: 30vw;
    }
`