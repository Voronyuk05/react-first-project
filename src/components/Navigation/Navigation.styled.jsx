import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    @media screen and (max-width: 992px) {
        transform: translateX(-150%);
        transition: all 0.3s ease 0s;
        z-index: 9;
        position: fixed;
        flex-direction: column;
        justify-content: center;
        width: 40vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: #7B5896;
        ${({checked}) => {
            if (checked) {
                return `
                transition: all 0.3s ease 0s;
                    transform: translateX(0%);
                `
            }
        }}
        a {
            color: white;
        }
    }

    @media screen and (max-width: 576px) {
        width: 50vw;
    }
`
