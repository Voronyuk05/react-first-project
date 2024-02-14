import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1vw;
    width: 60vw;
    padding: 0px;
    margin: 0px;
    @media screen and (max-width: 992px) {
        width: 80vw;
        gap: 2vw;
    }

    @media screen and (max-width: 576px) {
        height: 450vw;
        align-items: center;
        justify-content: center;
    }
`