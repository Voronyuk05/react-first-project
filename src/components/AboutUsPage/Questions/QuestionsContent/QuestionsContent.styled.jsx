import { H2Small } from "components/Global.styled"
import styled from "styled-components"

export const QuestionsContentComponent = styled.div`
    width: 28.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    @media screen and (max-width: 992px) {
        width: 70vw;
    }
    @media screen and (max-width: 576px) {
        width: 90vw;
    }
    
`

export const ContentTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5vw;
    @media screen and (max-width: 992px) {
        h2 {
            text-align: center;
        }
        ${H2Small} {
            font-size: 3vw;
        }
    }

    @media screen and (max-width: 576px) {
        h2 {
            font-size: 6vw;
        }
        ${H2Small} {
            font-size: 4vw;
        }
    }
`

export const ContentText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5vw;
    @media screen and (max-width: 576px) {
        gap: 2vw;
    }

    @media screen and (max-width: 380px) {
        gap: 4vw;
    }
`

export const Contacts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 6.8vw;
    @media screen and (max-width: 992px) {
        gap: 13.8vw;
    }


    @media screen and (max-width: 576px) {
        gap: 2vw;
    }

    @media screen and (max-width: 380px) {
        gap: 4vw;
    }
`

export const ContactLink = styled.a`
    background: #B190CB;
    height: 2.5vw;
    padding: 0vw 1.5vw 0vw 1.5vw;
    border: none;
    border-radius: 5px;
    gap: 10px;
    font-size: 1.2vw;
    font-weight: 600;
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    &:hover {
        background: #8963A7;
        text-decoration: underline;
    }

    @media screen and (max-width: 992px) {
        height: 5vw;
        font-size: 2.5vw;
    }

    @media screen and (max-width: 576px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80vw;
        height: 7vw;
        font-size: 4vw;
        box-sizing: border-box;
    }

    @media screen and (max-width: 380px) {
        height: 10vw;
    }
`

export const ContactButton = styled.button`
    background: #B190CB;
    height: 2.5vw;
    padding: 0.5vw 0.5vw 0.5vw 0.5vw;
    border: none;
    border-radius: 5px;
    gap: 0.5vw;
    font-size: 1.2vw;
    font-weight: 600;
    color: white;
    &:hover {
        background: #8963A7;
    }

    @media screen and (max-width: 992px) {
        height: 5vw;
        font-size: 2.2vw;
    }

    @media screen and (max-width: 576px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80vw;
        height: 7vw;
        font-size: 4vw;
    }

    @media screen and (max-width: 380px) {
        height: 10vw;
    }
`