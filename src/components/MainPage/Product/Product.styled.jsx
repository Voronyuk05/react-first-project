import styled from "styled-components";

export const ProductComponent = styled.section`
    height: 40.6vw;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 992px) {
        height: 150vw;
    }

    @media screen and (max-width: 576px) {
        height: 200vw;
        h2 {
            width: 75vw;
            text-align: center;
        }
    }

    @media screen and (max-width: 380px) {
        height: 700vw;
        h2 {
            font-size: 9vw;
            width: 85vw;
        }
    }
`