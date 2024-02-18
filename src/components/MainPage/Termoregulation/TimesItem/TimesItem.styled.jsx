import styled from "styled-components";

export const Item = styled.li`
    width: ${({type}) => {return type === 'short' ? '30vw' : '33.1vw'}};
    height: 10vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    padding: 2vw;
    background-image: url(${({bgImg}) => bgImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    box-sizing: border-box;
    @media screen and (max-width: 992px) {
        width: 60vw;
        height: 20vw;
        justify-content: space-around;
        gap: 4vw;
    }

    @media screen and (max-width: 576px) {
        width: 95vw;
        height: 33vw;
    }

`

export const Text = styled.div`
    max-width: 17.3vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5vw;
    @media screen and (max-width: 992px) {
        max-width: 35.3vw;
        gap: 1vw;
    }

    @media screen and (max-width: 576px) {
        max-width: 50vw;
        gap: 1vw;
    }
    @media screen and (max-width: 380px) {
        max-width: 100vw;
        gap: 1vw;
        margin-left: 4vw;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const EclipseImg = styled.img`
    width: 5.2vw;
    @media screen and (max-width: 992px) {
        width: 10vw;
    }

    @media screen and (max-width: 576px) {
        width: 15vw;
    }

    @media screen and (max-width: 380px) {
        display: none;
    }
`

export const Degrees = styled.span`
    position: absolute;
    top: 35%;
    left: 23%;
    text-align: center;
    font-family: Rubik;
    font-size: 1.4vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: linear-gradient(180deg, #5F4E6A 0%, #985CC3 57.29%, #7B5896 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (max-width: 992px) {
        font-size: 2.8vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 4vw;
    }

    @media screen and (max-width: 380px) {
        display: none;
    }
`