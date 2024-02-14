import styled from "styled-components";

export const Content = styled.div`
    width: 69.5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3vw;
    @media screen and (max-width: 992px) {
        width: 100%;
        gap: 6vw;
    }
`

export const CalculationNav = styled.div`
    height: 9.3vw;
    width: 25vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.3vw;
    @media screen and (max-width: 992px) {
        width: 50vw;
        height: 15vw;
        gap: 3vw;
    }
`

export const Way = styled.div`
    width: 25vw;
    height: 0.5vw;
    stroke-width: 10px;
    border-radius: 10px;
    background-color: #EDEDED;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    @media screen and (max-width: 992px) {
        width: 45vw;
        height: 1vw;
    }
`

export const Completed = styled.div`
    transition: 0.5s;
    width: ${({percent}) => {return `${33.3 * percent}%`}};
    height: 0.5vw;
    border-radius: 10px;
    background-color: #8963A7;
    @media screen and (max-width: 992px) {
        height: 1vw;
    }
`

export const Moving = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const StepsForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    height: 8.5vw;
    @media screen and (max-width: 992px) {
        height: 20vw;
        gap: 4vw;
        align-items: flex-start;
        padding-left: 5vw;
    }
`

export const LabelObjects = styled.label`
    display: flex;
    flex-direction: ${({direction}) => direction};
    align-items: ${({items}) => items};
    justify-content: flex-start;
    gap: 1vw;
    min-width: 45vw;
    @media screen and (max-width: 992px) {
        gap: 1vw;
        flex-wrap: wrap;
        max-width: 80%;
    }
`

export const WrapperInputs = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    align-items: center;
    justify-content: flex-start;
    gap: 1vw;
    @media screen and (max-width: 992px) {
        flex-wrap: wrap;
        gap: 1.5vw;
    }
`

export const WrapperObject = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    align-items: center;
    justify-content: center;
    gap: 0.3vw;
    @media screen and (max-width: 992px) {
        gap: 0.6vw;
    }
`

export const InputMeters = styled.input`
    font-size: 0.9vw;
    width: 3.0vw;
    height: 0.9vw;
    border-radius: 3px;
    border: 1px solid var(--xl-pipe-purple, #7B5896);
    @media screen and (max-width: 992px) {
        width: 6vw;
        height: 2vw;
        font-size: 1.7vw;
    }
`