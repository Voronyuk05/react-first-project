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

    @media screen and (max-width: 576px) {
        height: 40vw;
    }

    @media screen and (max-width: 380px) {
        height: 60vw;
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

    @media screen and (max-width: 576px) {
        width: 90%;
        flex-direction: column;
        align-items: flex-start;
        gap: 5vw;
    }
`

export const FooterLogo = styled.img`
    width: 10.4vw;
    @media screen and (max-width: 992px) {
        width: 20vw;
    }

    @media screen and (max-width: 576px) {
        width: 30vw;
    }

    @media screen and (max-width: 380px) {
        width: 50vw;
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


    @media screen and (max-width: 576px) {
        width: 70vw;
        display: flex;
        align-items: flex-start;
        h4 {
            font-size: 3vw;
        }
    }

    @media screen and (max-width: 380px) {
        h4 {
            font-size: 4vw;
        }
    }
`