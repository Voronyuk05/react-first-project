import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    width: 63.1vw;
    padding: 0px;
    @media screen and (max-width: 992px) {
        width: 90vw;
        gap: 2vw;
        flex-wrap: wrap;
    }
`