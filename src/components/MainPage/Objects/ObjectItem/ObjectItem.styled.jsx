import styled from "styled-components";

export const Item = styled.li`
    width: 15.6vw;
    height: 32vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0.8vw;
    gap: 0.5vw;
    box-sizing: border-box;
    background-image: url(${({bg}) => bg});
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width: 992px) {
        width: 35vw;
        height: 70vw;
        padding: 1.5vw;
        gap: 2vw;
        h4 {
            text-align: start;
            font-size: 3vw;
        }
        p {
            text-align: start;
        }
        a {
            font-size: 2.5vw;
        }
    }
    @media screen and (max-width: 576px) {
        width: 45vw;
        height: 100vw;
        h4 {
            text-align: start;
            font-size: 4vw;
        }
        a {
            font-size: 3.5vw;
        }
    }
`

export const Features = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2.3vw;
    margin-top: 1.2vw;
    margin-bottom: 1.2vw;
    @media screen and (max-width: 992px) {
        margin-top: 2.2vw;
        margin-bottom: 2.2vw;
        gap: 7vw;
    }
`

export const FeatureItem = styled.div`
    width: 5.2vw;
    gap: 0.4vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width: 992px) {
        width: 10.2vw;
        h3,h5 {
            text-align: start;
        }
    }

    @media screen and (max-width: 576px) {
        width: 15.2vw;
    }
`