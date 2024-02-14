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

`
