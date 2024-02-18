import styled from 'styled-components';

export const LogoComponent = styled.img`
    width: 10vw;
    @media screen and (max-width: 992px) {
        width: 20vw;
    }

    @media screen and (max-width: 576px) {
        width: 28vw;
    }

    @media screen and (max-width: 380px) {
        width: 40vw;
    }
`