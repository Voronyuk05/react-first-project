import styled from 'styled-components';

export const Card = styled.div`
    width: 19vw;
    height: 10.67vw;
    margin-top: 0.8vw;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    box-sizing: border-box;
    border-radius: 10px;
    background: var(--xl-pipe-white, #FFF);
    padding: 2vw 0px 1.4vw 1vw;
    &:hover{
        background: linear-gradient(120deg, #8963A7 13.65%, #6E4D88 47.16%);
        h3 {
            color: var(--xl-pipe-white, #FFF);
        }
        h4 {
            color: var(--xl-pipe-white, #FFF);
        }
    }
    h4 {
        width: 12vw;
        @media screen and (max-width: 992px) {
            width: 20vw;
        }

        @media screen and (max-width: 576px) {
            width: 30vw;
        }
    }
    @media screen and (max-width: 992px) {
        height: 20.67vw;
        width: 40vw;
        padding: 2.5vw 0px 1.4vw 1.5vw;
    }

    @media screen and (max-width: 576px) {
        height: 32.67vw;
        width: 60vw;
        padding: 3.5vw 0px 2vw 2vw;
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4vw;
    @media screen and (max-width: 992px) {
        gap: 1vw;
    }

    @media screen and (max-width: 576px) {
        gap: 2vw;
    }
`

export const CardImg = styled.img`
    width: 9.0vw;
    margin-left: 4%;
    @media screen and (max-width: 992px) {
        width: 16vw;
        margin-left: 15%;
    }

    @media screen and (max-width: 576px) {
        width: 24vw;
    }
`