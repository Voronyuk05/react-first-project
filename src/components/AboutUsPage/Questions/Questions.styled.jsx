import { H2, H2Small } from "components/Global.styled";
import styled from "styled-components";

export const QuestionsComponent = styled.section`
    width: 100%;
    height: 49.7vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #443C49;
    @media screen and (max-width: 992px) {
        height: 130vw;
    }

    @media screen and (max-width: 576px) {
        height: 190vw;
    }

    @media screen and (max-width: 380px) {
        height: 230vw;
    }
`

export const QuestionsContainer = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    @media screen and (max-width: 992px) {
        flex-direction: column;
        gap: 15vw;
    }
`

export const Person = styled.div`
    width: 26.1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vw;

    @media screen and (max-width: 992px) {
        width: 70vw;
        ${H2} {
            font-size: 5vw;
        }
        ${H2Small} {
            font-size: 3.5vw;
        }
    }

    @media screen and (max-width: 576px) {
        width: 90vw;
        ${H2} {
            font-size: 8vw;
        }
        ${H2Small} {
            font-size: 5vw;
        }
    }

    
`

export const PersonImg = styled.img`
    border: 8px solid white;
    border-radius: 50%;
    width: 26.1vw;

    @media screen and (max-width: 992px) {
        width: 50vw;
    }

    @media screen and (max-width: 576px) {
        width: 80vw;
    }
`
