import styled from "styled-components";

export const ObjectsComponent = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 41.6vw;
    padding: 7vw 0vw 7vw 0vw;
    @media screen and (max-width: 992px) {
        min-height: 100vw;
        padding: 10vw 0vw 10vw 0vw;
    }

    @media screen and (max-width: 576px) {
        min-height: 140vw;
    }
`

export const  ObjectsContainer = styled.div`
    width: 95%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    @media screen and (max-width: 992px) {
        text-align: center;
    }

`