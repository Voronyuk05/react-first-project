import styled from 'styled-components';
import { Paragraph } from 'components/Global.styled';

export const HeaderComponent = styled.header`
    width: 100%;
    height: 5.6vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #443C49 ;
`


export const Container = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 17vw;
`

export const WrapperLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10%;
`

export const Button = styled.button`
    width: 14%;
    height: calc((100vw * 0.13)/9);
    border-radius: 5px;
    border: none;
    background: var(--xl-pipe-hover-purple, #B190CB);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-family: Inter;
    font-size: 0.85vw;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    &:hover {
        transition: 0.3s;
        background: var(--xl-pipe-light-purple, #8963A7);
    }
`

export const LogoText = styled(Paragraph)`
    width: 60%;
    font-size: calc(0.94vw);
    color: white;
`

export const LogoComponent = styled.img`
width: calc(10vw);
`


///Modal

export const WrapperOptions = styled.div`
    max-width: 33vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1vw;
`

export const OptionButton = styled.button`
    width: ${({width}) => {return width ? width : '11vw'}};
    height: ${({height}) => {return height ? height : '3.2vw'}};
    box-sizing: border-box;
    border-radius: 0.5vw;
    border: solid 0.2vw #8963A7;
    font-size: 1.25vw;
    font-weight: 400;
    font-family: Rubik;
    background: rgba(0,0,0,0);
    ${({value, option}) => {
        if (value === option) { 
            return `
                background: #8963A7;
                color: white;
            `
        }
    }}
`

export const ButtonBack = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5vw;
    position: absolute;
    bottom: 1vw;
    left: 1vw;
    width: 6vw;
    height: 1.8vw;
    background: rgba(0,0,0,0);
    border: none;
    font-size: 1.25vw;
    font-weight: 700;
    color: #443C49;
    font-family: Rubik;
`

export const Arrow = styled.img`
    width: 0.98vw;
`