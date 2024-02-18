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

    @media screen and (max-width: 576px) {
        height: 80vw;
        width: 45vw;
        button {
            font-size: 3.5vw;
        }
    }

    @media screen and (max-width: 380px) {
        height: 160vw;
        width: 90vw;
        padding: 8vw 2vw 8vw 2vw;
        button {
            padding: 4vw;
            font-size: 7vw;
        }
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

    @media screen and (max-width: 576px) {
        &::marker {
            font-size: 4vw;
        }

        p {
            font-size: 3vw;
        }
    }

    @media screen and (max-width: 380px) {
        margin-left: 10vw;
        &::marker {
            font-size: 8vw;
        }

        p {
            font-size: 6vw;
        }
    }
    
`

export const ItemLogo = styled.img`
    width: 10vw;
    @media screen and (max-width: 992px) {
        width: 25vw;
    }

    @media screen and (max-width: 576px) {
        width: 30vw;
    }


    @media screen and (max-width: 380px) {
        width: 70vw;
    }
`