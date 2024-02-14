import styled from "styled-components";

export const Item = styled.li`
    height: 25.5vw;
    width: 15vw;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    gap: 1.5vw;
    background-color: #7B5896;
    padding: 2vw 0.5vw 2vw 1vw;
    box-sizing: border-box;
    @media screen and (max-width: 992px) {
        height: 60vw;
        width: 35vw;
        gap: 3vw;
        padding: 4vw 1vw 4vw 2vw;
    }
`


export const ItemList = styled.ul`
    padding-left: 2.5vw;
    @media screen and (max-width: 992px) {
        padding-left: 5vw;
    }
`
export const ListText = styled.li`
    display: list-item;
    &::marker {
        content: 'o ';
        font-size: 1.6vw;
        color: white;
    }
    @media screen and (max-width: 992px) {
        &::marker {
            font-size: 3vw;
        }
    }
    
`

export const ItemLogo = styled.img`
    width: 10vw;
    @media screen and (max-width: 992px) {
        width: 25vw;
    }
`