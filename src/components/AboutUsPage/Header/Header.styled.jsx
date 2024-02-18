import styled from 'styled-components';
import { Paragraph } from 'components/Global.styled';

export const HeaderComponent = styled.header`
    width: 100%;
    height: 5.6vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #443C49 ;

    @media screen and (max-width: 992px) {
        height: 11vw;
    }

    @media screen and (max-width: 992px) {
        height: 16vw;
    }

    @media screen and (max-width: 380px) {
        height: 25vw;
    }
`


export const Container = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 17vw;
    @media screen and (max-width: 992px) {
        gap: 5vw;
    }
`

export const WrapperLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10%;
`

export const Button = styled.button`
    width: 14%;
    height: 1.6vw;
    border-radius: 5px;
    border: none;
    background: var(--xl-pipe-hover-purple, #B190CB);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-family: Inter;
    font-size: 0.85vw;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    &:hover {
        transition: 0.3s;
        background: var(--xl-pipe-light-purple, #8963A7);
    }

    @media screen and (max-width: 992px) {
        width: 24vw;
        height: 2.6vw;
        font-size: 1.65vw;
    }

    @media screen and (max-width: 576px) {
        width: 45vw;
        height: 5vw;
        font-size: 2.4vw;
    }

    @media screen and (max-width: 380px) {
        height: 7vw;
        font-size: 3.5vw;
    }
`

export const LogoText = styled(Paragraph)`
    width: 60%;
    font-size: 0.94vw;
    color: white;

    @media screen and (max-width: 992px) {
        font-size: 1.6vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 2.4vw;
    }

    @media screen and (max-width: 380px) {
        display: none;
    }
`

export const LogoComponent = styled.img`
    width: calc(10vw);
`
