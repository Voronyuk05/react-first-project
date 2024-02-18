import styled from "styled-components";

export const СomparisonComponent = styled.section`
    width: 100%;
    height: 135vw;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 992px) {
        height: 300vw;
    }

    @media screen and (max-width: 576px) {
        align-items: flex-start;
        height: 480vw;
        padding-top: 7vw;
        box-sizing: border-box;
    }

    @media screen and (max-width: 380px) {
        height: 1150vw;
    }
`

export const СomparisonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1220px;
    @media screen and (max-width: 992px) {
        width: 90vw;
    }

    
`

export const Slides = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`