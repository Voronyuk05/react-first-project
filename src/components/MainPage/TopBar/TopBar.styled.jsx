import styled from 'styled-components';

export const TopBarComponent = styled.section`
    width: 100%;
    height: 2.7vw;
    background: var(--xl-pipe-purple, #7B5896);
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 992px) {
        height: 5.2vw;
    }

    @media screen and (max-width: 576px) {
        height: 7vw;
    }
`

export const WrapperLocation = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5vw;
    @media screen and (max-width: 992px) {
        gap: 2vw;
        width: 60%;
    }
`
export const Location = styled.span`
    border-radius: 35px;
    border: 1px solid var(--xl-pipe-white, #FFF);
    color: var(--xl-pipe-white, #FFF);
    font-size: 0.90vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    padding: 0.5% 6% 0.5% 6%;
    &:hover {
        border: 1px solid var(--xl-pipe-purple, #7B5896);
        background: #FFF;   
        color: #9599B3;
        transition: 0.3s;
    }
    @media screen and (max-width: 992px) {
        font-size: 1.8vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 2.4vw;
    }
`

