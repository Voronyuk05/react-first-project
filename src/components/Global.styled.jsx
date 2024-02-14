import styled from 'styled-components';
import crossIcon from '../images/cross.png'

export const Paragraph = styled.p`
    color: ${({color}) => {return color === 'primary' ? '#443C49' : color}};
    font-family: Rubik;
    font-size: 0.93vw;
    font-style: normal;
    font-weight: ${({weight}) => weight};
    line-height: normal;
    margin: 0px;
    opacity: ${({opacity}) => opacity};
    @media screen and (max-width: 992px) {
        font-size: 1.8vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 2.8vw;
    }
`

export const ParagraphDark = styled(Paragraph)`
    color: #443C49;
`

export const ParagraphTiny = styled(Paragraph)`
    font-weight: 300;
    font-size: 0.625vw;
    color: var(--xl-pipe-black, #443C49);
    @media screen and (max-width: 992px) {
        font-size: 1.2vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 2vw;
    }
`

export const ParagraphHuge = styled.p`
    color: ${({color}) => {return color === 'primary' ? '#443C49' : 'white'}};
    font-family: Rubik;
    font-size: 1.25vw;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin: 0px;
    @media screen and (max-width: 992px) {
        text-align: center;
        font-size: 2.3vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 3vw;
    }
`

export const Link = styled.a`
    text-align: center;
    font-family: Rubik;
    font-size: 0.94vw;
    text-decoration: none;
    color: black;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        transition: 0.2s;
        color: #8963A7;
    }
    @media screen and (max-width: 992px) {
        font-size: 3vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 4vw;
    }
`
export const LinkSecondary = styled.a`
    color: var(--xl-pipe-white, #FFF);
    font-family: Rubik;
    text-align: center;
    font-size: 0.80vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 992px) {
        font-size: 1.6vw;
    }
`

export const LinkUnderline = styled(Link)`
    position: relative;
    font-weight: 500;
    text-transform: uppercase;
    &::before {
        content: '';
        bottom: -8px;
        left: 0;
        position: absolute;
        width: 100%;
        height: 0.2vw;
        background-color: #8963A7;
        transition: 0.2s;
    }

    @media screen and (max-width: 576px) {
        &::before {
        height: 0.4vw;
        }
    }
`

export const PrimaryButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.3vw;
    border-radius: 35px;
    font-family: Rubik;
    height: 1.90vw;
    background: var(--xl-pipe-purple, #7B5896);
    color: var(--xl-pipe-white, #FFF);
    font-size: 0.90vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    border: none;
    box-sizing: content-box;
    transition: 0.2s step-end;
    &:active {
        transition: 0.1s ;
        background: #443C49;
    }
    @media screen and (max-width: 992px) {
        height: 3.6vw;
        font-size: 1.8vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 3vw;
        padding: 1vw;
    }
`

export const PrimaryButtonP = styled(PrimaryButton)`
    padding: 0.4% 3% 0.4% 3%;
    @media screen and (max-width: 576px) {
        padding: 2% 6% 2% 6%;
    }
`

export const GrayButton = styled(PrimaryButtonP)`
    background: var(--xl-pipe-gray, #9599B3);
`

export const GrayDarkButton = styled.a`
    color: #FFF;
    display: flex;
    align-items: center;
    font-family: Rubik;
    font-size: 0.90vw;
    height: 1.90vw;
    border-radius: 35px;
    padding: 0.4% 4% 0.4% 4%;
    background: #909090;
    box-shadow: 0px 4px 17px 0px #00000040;
    transition: 0.2s;
    text-decoration: none;
    &:hover {
        transition: 0.2s;
        background: #636676;
        color: #9599B3;
    }
`

export const WhiteButton = styled(PrimaryButton)`
    padding: 0.2vw 1.4vw 0.2vw 1.4vw;
    background-color: white;
    color: #443C49;
    &:active {
        transition: 0.1s ;
        background-color: rgba(0, 0, 0, 0);
        color: var(--xl-pipe-white, #FFF);
    }

    @media screen and (max-width: 576px) {
        font-size: 4vw;
        padding: 1vw 3vw 1vw 3vw;
    }
`

export const OrangeButton = styled(PrimaryButton)`
    background: #FFD432;
    color: black;
    font-size: 0.8vw;
    padding: 0.6% 5% 0.4% 6%;
    max-width: 12vw;
    text-align: center;
    &:active {
        transition: 0.1s ;
        background: rgba(0, 0, 0, 0);
        color: white;
    }
`

export const HugeOrangeButton = styled(OrangeButton)`
    font-size: 0.73vw;
    max-width: 20vw;
`

export const SecondaryButton = styled(PrimaryButton)`
    font-size: 1vw;
    padding: 0.2% 1% 0.2% 1%;
    border-radius: 41px;
    border: 1px solid  #9599B3;
    background-color: rgba(0, 0, 0, 0);
    color: #9599B3;
    text-transform: none;
    &:active {
        transition: 1ms step-end;
        background: #8963A7;
        color: var(--xl-pipe-white, #FFF);
    }
    @media screen and (max-width: 992px) {
        font-size: 2vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 3vw;
        padding: 0.5% 2% 0.5% 2%;
    }
`

export const LightButton = styled.button`
    height: 2.5vw;
    padding: 0.5vw 1.5vw 0.5vw 1.5vw;
    border-radius: 5px;
    border: none;
    background: var(--xl-pipe-hover-purple, #B190CB);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-family: Inter;
    font-size: 1.25vw;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    &:hover {
        transition: 0.3s;
        background: var(--xl-pipe-light-purple, #8963A7);
    }
`

export const ActiveButton = styled(SecondaryButton)`
    background-color: #7B5896;
    color: white;
`

export const Container = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15%;
    max-width: 1520px;
`

export const ContainerColumn = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    max-width: 1520px;
    @media screen and (max-width: 992px) {
        gap: 3vw;
    }

    @media screen and (max-width: 576px) {
        gap: 5vw;
    }
`

export const FontDark = styled.span`
        font-weight: 500;
`


export const FontPrimary = styled.span`
    color: var(--xl-pipe-purple, #7B5896);
    font-weight: ${({weight}) => weight};
`

export const H1 = styled.h1`
    color: var(--xl-pipe-black, #443C49);
    font-family: Rubik;
    font-size: 2.33vw;
    font-style: normal;
    font-weight: 400;
    line-height: 107.5%; 
    margin: 0px;
    @media screen and (max-width: 992px) {
        font-size: 4.2vw;
        text-align: center;
    }

    @media screen and (max-width: 576px) {
        font-size: 5vw;
    }
`


export const H2 = styled.h2`
    color: ${({color}) => {return color === 'primary' ? '#443C49' : color}};
    font-family: Rubik;
    text-align: ${({align}) => align};
    font-size: 1.9vw;
    font-style: normal;
    font-weight: ${({weight}) => weight};
    line-height: normal;
    margin: 0px;
    text-transform: ${({transform}) => transform};;
    @media screen and (max-width: 992px) {
        font-size: 3.8vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 4.7vw;
    }
`

export const H2Huge = styled(H2)`
    font-size: 3.12vw;
    @media screen and (max-width: 992px) {
        font-size: 5.5vw;
    }
`


export const H2Small = styled(H2)`
    font-size: 1.56vw;
`

export const H3 = styled.h3`
    color: ${({color}) => {return color === 'primary' ? '#443C49' : color}};
    font-size: 1.4vw;
    text-align: ${({align}) => align};
    font-family: Rubik;
    font-style: normal;
    font-weight: ${({weight}) => weight};
    line-height: normal;
    text-transform: ${({transform}) => transform};
    margin: 0px;
    @media screen and (max-width: 992px) {
        font-size: 2.8vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 4vw;
    }
`

export const H3Huge = styled(H3)`
    font-size: 1.7vw;
    @media screen and (max-width: 992px) {
        font-size: 3vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 4.3vw;
    }
`

export const ItemTitle = styled(H3)`
    font-size: 1.2vw;
    text-transform: none;
    @media screen and (max-width: 992px) {
        font-size: 2vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 3vw;
    }
`

export const H3Small = styled(H3)`
    font-size: 1vw;
    @media screen and (max-width: 992px) {
        font-size: 1.8vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 3.8vw;
        text-align: center;
    }
`


export const H4 = styled.h4`
    color: ${({color}) => {return color === 'primary' ? '#443C49' : color}};
    font-size: 0.90vw;
    font-family: Rubik;
    font-style: normal;
    font-weight: ${({weight}) => weight};
    line-height: normal;
    text-align: ${({align}) => align};;
    margin: 0px;
    text-transform: ${({transform}) => transform};
    @media screen and (max-width: 992px) {
        font-size: 1.80vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 2.5vw;
    }
`
export const H4Huge = styled(H4)`
    font-size: 1.1vw;
    @media screen and (max-width: 992px) {
        font-size: 2vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 3vw;
    }
`


export const H5 = styled.h5`
    color: ${({color}) => {return color === 'primary' ? '#443C49' : color}};
    font-family: Rubik;
    font-size: 0.8vw;
    font-style: normal;
    font-weight: ${({weight}) => weight};
    line-height: normal;
    margin: 0px;
    @media screen and (max-width: 992px) {
        font-size: 1.6vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 2vw;
    }
`

export const H5Secondary = styled(H5)`
    opacity: 0.5;
`

export const H6 = styled.h6`
    margin: 0px;
    font-family: Rubik;
    color: ${({color}) => {return color === 'primary' ? '#443C49' : color}};
    font-size: 0.73vw;
    font-weight: ${({weight}) => weight};
    text-align: ${({align}) => align};;
`

export const Input = styled.input`
    width: 26vw;
    height: 3.17vw;
    padding: 0.83vw 1vw 0.83vw 1vw;
    box-sizing: border-box;
    border-radius: 0.5vw;
    border: solid 0.25vw #8963A7;
    font-size: 1.25vw;
    font-weight: 400;
    font-family: Rubik;
`

export const Checkbox = styled.input`
    padding: 0px;
    margin: 0px;
    -webkit-appearance: none;
    appearance: none;
    border: 0.11vw solid grey;
    border-radius: 0.25vw;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
        -webkit-appearance: none;
        appearance: none;
        content: "";
        width: 0.7vw;
        height: 0.7vw;
        background-color: #8963A7;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
    }
    &:checked::before {
        transform: scale(0.7);
    }
    @media screen and (max-width: 992px) {
        &::before {
            width: 1.8vw;
            height: 1.8vw;
        }
    }

    @media screen and (max-width: 576px) {
        &::before {
            width: 2.8vw;
            height: 2.8vw;
        }
    }
`

export const RadioObjects = styled.input`
    padding: 0px;
    margin: 0px;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9599B3;
    &::before {
        content: "";
        width: 3.6vw;
        height: 3.6vw;
        transform: scale(0.7);
        background-image: url(${({bg}) => bg.default});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    &:checked {
        transition: 0.2s;
        background: #7B5896;
    }
    @media screen and (max-width: 992px) {
        &::before {
        content: "";
        width: 6vw;
        height: 6vw;
        transform: scale(0.7);
        background-image: url(${({bg}) => bg.default});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        }
    }
`

export const Radio = styled.input`
    padding: 0px;
    margin: 0px;
    -webkit-appearance: none;
    appearance: none;
    border: 0.11vw solid grey;
    border-radius: 0.25vw;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
        -webkit-appearance: none;
        appearance: none;
        content: "";
        width: 0.7vw;
        height: 0.7vw;
        background-color: #8963A7;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
    }
    &:checked::before {
        transform: scale(0.7);
    }
    @media screen and (max-width: 992px) {
        &::before {
            width: 1.8vw;
            height: 1.8vw;
        }
    }
`

export const InputRange = styled.input`
    width: 17vw;
    height: 1px;
    background: #9599B3;
    -webkit-appearance: none;
    appearance: none;
    &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        border: none;
        border-radius: 50%;
        outline: 0.01vw solid gray;
        outline-offset: 0.235vw;
        width: 0.7vw;
        height: 0.7vw;
        background-color: #7B5896;;
    }
    @media screen and (max-width: 992px) {
        width: 22vw;
        height: 1px;
        &::-webkit-slider-thumb {
            width: 1.2vw;
            height: 1.2vw;
        }
    }
`

export const Line = styled.img`
    width: 2vw;
    @media screen and (max-width: 992px) {
        width: 3.6vw;
    }
`

export const MediaIcon = styled.img`
    width: 1.82vw;
    @media screen and (max-width: 576px) {
        width: 3vw;
    }
`

export const Tag = styled.h3`
    color: white;
    font-size: 1.1vw;
    text-transform: uppercase;
    text-align: center;
    margin: 0px;
    @media screen and (max-width: 992px) {
        font-size: 2.5vw;
    }
`

export const HideButton = styled.button`
    width: 1.458vw;
    height: 1.460vw;
    display: block;
    border: none;
    background-image: url(${crossIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 1vw;
    right: 1vw;
    background-color: white;
`