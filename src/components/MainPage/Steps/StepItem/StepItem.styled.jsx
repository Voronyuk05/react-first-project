import styled from 'styled-components';

export const Item = styled.li`
    width: 19vw;
    height: 19vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    background: linear-gradient(180deg, #8963A7 0%, #7B5896 100%);
    gap: 0.5vw;
    padding: 1vw 1vw 0vw 1vw;
    box-sizing: border-box;
    @media screen and (max-width: 992px) {
        padding: 3vw 2vw 0vw 2vw;
        width: 38vw;
        height: 38vw;
        gap: 1.5vw;
    }

    @media screen and (max-width: 576px) {
        padding: 3vw 8vw 0vw 8vw;
        width: 70vw;
        height: 70vw;
        gap: 1.5vw;
        h3 {
            font-size: 5vw;
        }
        h4 {
            font-size: 3.5vw;
        }
    }

    @media screen and (max-width: 380px) {
        padding: 3vw 8vw 0vw 8vw;
        width: 90vw;
        height: 90vw;
        padding: 5vw 2vw 0vw 2vw;
        gap: 3vw;
        h3 {
            font-size: 7vw;
        }
        h4 {
            font-size: 5vw;
        }
    }
`

export const ItemImg = styled.img`
    width: 5.2vw;
    margin-bottom: 0.5vw;
    @media screen and (max-width: 992px) {
        width: 9vw;
        margin-bottom: 1vw;
    }

    @media screen and (max-width: 576px) {
        width: 17vw;
        margin-bottom: 3vw;
    }

    @media screen and (max-width: 380px) {
        width: 25vw;
        margin-bottom: 5vw;
    }
`