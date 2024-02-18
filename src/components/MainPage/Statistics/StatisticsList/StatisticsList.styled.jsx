import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80vw;
    gap: 2vw;
    margin: 0px;
    @media screen and (max-width: 992px) {
        width: 90vw;
        gap: 5vw;
        padding: 0px;
    }

    @media screen and (max-width: 576px) {
        gap: 10vw;
    }

    @media screen and (max-width: 380px) {
        flex-direction: column;
        align-items: center;
        gap: 15vw;
    }

`

