import { OptionButton } from "components/AboutUsPage/Header/ConsultationForm/ConsultationForm.styled";
import { HideButton } from "components/Global.styled";
import styled from "styled-components";

export const ModalFormComponent = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    background: rgba(0, 0 ,0 ,0.5);
    width: 100vw;
    height: 100vh;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 380px) {
        height: 300vw;
    }
`

export const ModalFormContainer = styled.form`
    position: relative;
    width: 46.5vw;
    height: 28vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    background-color: white;
    @media screen and (max-width: 992px) {
        width: 80vw;
        height: 48vw;
        padding: 1vw 6vw 0vw 6vw;
        box-sizing: border-box;
        h2 {
            font-size: 4vw;
        }
        ${HideButton} {
            width: 3vw;
            height: 3vw;
        }
        input {
            width: 40vw;
            height: 5vw;
            font-size: 2vw;
        }
        h6 {
            font-size: 1.5vw;
        }
    }

    @media screen and (max-width: 380px) {
        width: 95vw;
        height: 140vw;
        padding: 1vw 6vw 0vw 6vw;
        box-sizing: border-box;
        margin-bottom: 60vw;
        gap: 5vw;
        h2 {
            text-align: center;
            font-size: 8vw;
        }
        ${HideButton} {
            width: 6vw;
            height: 6vw;
        }
        input {
            width: 80vw;
            height: 10vw;
            font-size: 4vw;
        }
        h6 {
            font-size: 4vw;
        }
    }
`
