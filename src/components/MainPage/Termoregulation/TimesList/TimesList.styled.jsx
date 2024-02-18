import styled from "styled-components";

export const List = styled.ul`
    width: 65vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0px;
    @media screen and (max-width: 992px) {
        width: 90vw;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 380px) {
        width: 95vw;
    }
`