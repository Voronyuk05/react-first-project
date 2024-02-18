import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    @media screen and (max-width: 576px) {
        width: 100vw;
        height: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const TBody = styled.tbody`
    @media screen and (max-width: 576px) {
        height: 100vw;
        display: flex;
    }
`

export const THead = styled.thead`
    @media screen and (max-width: 576px) {
        height: 100vw;
        display: flex;
    }
`

export const TR = styled.tr`
    @media screen and (max-width: 576px) {
       height: 100vw;
       display: flex;
       flex-direction: column;
    }
`

export const LogoImg = styled.img`
    width: 6.5vw;
    @media screen and (max-width: 992px) {
        width: 15vw;
    }

    @media screen and (max-width: 576px) {
        width: 27vw;
    }
`



export const Th = styled.th`
    width: 1vw;
    height: 2vw;
    font-family: Rubik;
    font-size: 0.8vw;
    text-align: center;
    padding: 0.4vw;
    @media screen and (max-width: 992px) {
        width: 3vw;
        height: 6vw;
        font-size: 2vw;
    }

    @media screen and (max-width: 576px) {
        width: 30vw;
        height: 23vw;
        font-size: 4vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
`

export const ThBorder = styled(Th)`
    border-right: 1px white solid;
    @media screen and (max-width: 576px) {
        border-bottom: 1px white solid;
        border-right: 0px;
    }
`

export const Td = styled.td`
    width: 6.5vw;
    height: 2vw;
    color: white;
    font-family: Rubik;
    border-top: 1px solid white;
    font-size: 0.8vw;
    text-align: center;
    padding: 0.4vw;
    @media screen and (max-width: 992px) {
        width: 15vw;
        height: 6vw;
        font-size: 2vw;
    }

    @media screen and (max-width: 576px) {
        width: 30vw;
        height: 23vw;
        font-size: 4vw;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 0px;
        border-left: 1px white solid;
    }
`

export const TdBorder = styled(Td)`
    border-right: 1px white solid;
    border-top: 1px solid white;
    @media screen and (max-width: 576px) {
        border-left: 1px white solid;
        border-bottom: 1px white solid;
        border-right: 0px;
        border-top: 0px ;
    }
`