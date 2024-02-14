import styled from "styled-components"

export const QuestionsContentComponent = styled.div`
    width: 28.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vw;
`

export const ContentTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5vw;
`

export const ContentText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5vw;
`

export const Contacts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 6.8vw;
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
`