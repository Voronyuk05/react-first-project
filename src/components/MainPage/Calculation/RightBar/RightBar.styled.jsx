import styled from "styled-components";
import { H4Huge } from "components/Global.styled";

export const RigthBarComponent = styled.div`
    width: 23vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background: var(--xl-pipe-bg, #EDEDED);
    gap: 1.5vw;
    position: relative;
    border-radius: 0px 10px 10px 0px;
    @media screen and (max-width: 992px) {
        width: 100%;
        height: 100%;
        gap: 3vw;
        border-radius: 0px 0px 10px 10px;
    }
`

export const Chatacter = styled.img`
    width: 15.3vw;
    position: absolute;
    top: 2.3vw;
    @media screen and (max-width: 992px) {
        width: 30vw;
    }
`

export const Path = styled.div`
    width: 100%;
    height: 5.46vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.7vw;
    box-sizing: border-box;
    border-radius: 0px 0px 10px 0px;
    background: var(--xl-pipe-light-purple, #8963A7);
    @media screen and (max-width: 992px) {
        height: 8vw;
        border-radius: 0px 0px 10px 10px;
    }
`

export const Text = styled.div`
    width: 18vw;
    height: 8vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.4vw;
    box-sizing: border-box;
    padding: 1.7vw;
    border-radius: 10px;
    background: var(--xl-pipe-white, #FFF);
    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    @media screen and (max-width: 992px) {
        width: 40vw;
        height: 16vw;
        gap: 1.5vw;
        padding: 1.7vw;
        ${H4Huge} {
            font-size: 2.5vw;
        }
    }
`

export const Brackets = styled.img`
    position: absolute;
    top: -1.5vw;
    left: 13.7vw;
    width: 3.5vw;
    height: 2.7vw;
    @media screen and (max-width: 992px) {
        top: -3vw;
        left: 30vw;
        width: 7vw;
        height: 5.4vw;
    }
`