import styled from 'styled-components';

export const ContactComponent = styled.div`
    border-radius: 10px;
    background: var(--xl-pipe-white, #FFF);
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.10);
    width: 55vw;
    height: 17.6vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1vw;
    @media screen and (max-width: 992px) {
        width: 90vw;
        height: 30.6vw;
    }

    @media screen and (max-width: 576px) {
        width: 90vw;
        height: 120.6vw;
        flex-direction: column;
        gap: 10vw;
    }

    @media screen and (max-width: 380px) {
        width: 90vw;
        height: 160vw;
        flex-direction: column;
        gap: 10vw;
    }
`


export const ContactForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 1vw;
    width: 28.3vw;
    padding-left: 2vw;
    @media screen and (max-width: 992px) {
        width: 50.3vw;
        gap: 2vw;
    }

    @media screen and (max-width: 576px) {
        width: 90.3%;
        gap: 4vw;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 380px) {
        gap: 6vw;
    }
`

export const SearchBox = styled.div`
    width: 11.8vw;
    height: 2.4vw;
    border-radius: 35px;
    border: none;
    box-shadow: 0px 4px 36px 16px rgba(0, 0, 0, 0.10);   
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5vw;
    @media screen and (max-width: 992px) {
        width: 20vw;
        height:4vw;
        gap: 1vw;
    }

    @media screen and (max-width: 576px) {
        width: 70vw;
        height:7vw;
    }

    @media screen and (max-width: 380px) {
        width: 80vw;
        height: 9vw;
    }
`
export const SearchBoxIcon = styled.img`
    width: 1.1vw;
    height: 1.1vw;
    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        transform: scale(1.2);
    }
    @media screen and (max-width: 992px) {
        width: 2.2vw;
        height: 2.2vw;
    }

    @media screen and (max-width: 576px) {
        width: 4vw;
        height: 4vw;
    }

    @media screen and (max-width: 380px) {
        width: 6vw;
        height: 6vw;
    }
`

export const Line = styled.img`
    width: 0.1vw;
    height: 1.1vw;
    @media screen and (max-width: 992px) {
        width: 0.1vw;
        height: 1.6vw;
    }

    @media screen and (max-width: 576px) {
        width: 0.1vw;
        height: 3vw;
    }
`

export const Agreements = styled.div`
    width: 12vw;
    height: 1.9vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4vw;
    @media screen and (max-width: 992px) {
        width: 20vw;
        height: 3.8vw;
        gap: 1vw;
    }

    @media screen and (max-width: 576px) {
        width: 30vw;
        gap: 2vw;
    }

    @media screen and (max-width: 380px) {
        width: 80vw;
    }
`


export const Input = styled.input`
    width: 70%;
    height: 90%;
    font-size: 0.7vw;
    border-radius: 35px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    @media screen and (max-width: 992px) {
        font-size: 1.2vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 2.5vw;
        width: 80%;
    }

    @media screen and (max-width: 380px) {
        font-size: 4vw;
    }
`

export const ContactImg = styled.img`
    width: 24.8vw;
    height: 17.5vw;
    border-radius: 10px;
    filter: contrast(80%);
    @media screen and (max-width: 992px) {
        width: 45.3vw;
        height: 30.5vw;
    }

    @media screen and (max-width: 576px) {
        width: 100%;
        height: 60.5vw;
    }
`

