import styled from "styled-components";

export const WrapperOptions = styled.div`
    max-width: 33vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    @media screen and (max-width: 992px) {
        max-width: 50vw;
        gap: 1.5vw;
        input {
            width: 100%;
        }
    }
    @media screen and (max-width: 380px) {
        max-width: 90vw;
        gap: 4vw;
        input {
            width: 100%;
        }
    }
`

export const OptionButton = styled.button`
    width: ${({width}) => {return width ? width : '11vw'}};
    height: ${({height}) => {return height ? height : '3.2vw'}};
    box-sizing: border-box;
    border-radius: 0.5vw;
    border: solid 0.2vw #8963A7;
    font-size: 1.25vw;
    font-weight: 400;
    font-family: Rubik;
    background: rgba(0,0,0,0);
    ${({value, option}) => {
        if (value === option) { 
            return `
                background: #8963A7;
                color: white;
            `
        }
    }}

    @media screen and (max-width: 992px) {
        width: 70vw;
        height: 4vw;
        font-size: 2.5vw;
    }

    @media screen and (max-width: 380px) {
        width: 90vw;
        height: 8vw;
        font-size: 4.7vw;
    }
`

export const ButtonBack = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5vw;
    position: absolute;
    bottom: 1vw;
    left: 1vw;
    width: 6vw;
    height: 1.8vw;
    background: rgba(0,0,0,0);
    border: none;
    font-size: 1.25vw;
    font-weight: 700;
    color: #443C49;
    font-family: Rubik;
    margin-bottom: 0.5vw;
    @media screen and (max-width: 992px) {
        font-size: 2.5vw;
    }

    @media screen and (max-width: 380px) {
        font-size: 6vw;
        margin-bottom: 5vw;
    }
`

export const Arrow = styled.img`
    width: 1vw;
    @media screen and (max-width: 992px) {
        width: 2vw;
    }

    @media screen and (max-width: 380px) {
        width: 5vw;
    }
`