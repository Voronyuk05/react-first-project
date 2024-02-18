import styled from "styled-components";

export const List = styled.ul`
    width: 70.4vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5vw;
    padding: 0px;
    @media screen and (max-width: 992px) {
        gap: 3vw;
        width: 90vw;
    }

    @media screen and (max-width: 576px) {
        width: 95vw;
    }
    @media screen and (max-width: 380px) {
        flex-direction: column;
    }
`