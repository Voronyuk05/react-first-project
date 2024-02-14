import styled from 'styled-components';
import { Paragraph } from 'components/Global.styled';

export const HeaderComponent = styled.header`
    width: 100%;
    height: 5.6vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0.7%;
    @media screen and (max-width: 992px) {
        height: 10vw;
    }

    @media screen and (max-width: 576px) {
        height: 14vw;
    }
`


export const WrapperLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2vw;
`


export const LogoText = styled(Paragraph)`
    width: 40%;
    font-size: 0.94vw;
`

export const LogoComponent = styled.img`
    width: 10vw;
`

export const WrapperContacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const Contact = styled.h4`
    color: var(--xl-pipe-black, #443C49);
    font-family: Rubik;
    font-size: 1.4vw;
    font-style: normal;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0px;
    @media screen and (max-width: 992px) {
        font-size: 2.2vw;
    }

    @media screen and (max-width: 576px) {
        font-size: 3vw;
    }
`

export const Burger = styled.div`
    display: none;
	opacity: 0;
    @media screen and (max-width: 992px) {					
        display: block;
		opacity: 1;
		position: relative;
        width: 7vw;
		height: 4vw;
		cursor: pointer;
		span,
		&::before,
		&::after {
			left: 0;
			position: absolute;
			height: 10%;
			width: 100%;
			transition: all 0.3s ease 0s;
			background-color: #7B5896;
		}

		&::before,
		&::after {
			content: "";
		}

		&::before {
			top: 0;
		}

		&::after {
			bottom: 0;
		}

		span {
			top: 50%;
			transform: scale(1) translate(0, -50%);
		}
        ${({checked}) => {
            if (checked) {
                return `
                &::before,
                &::after {
                    background-color: white;
                }
                & span {
						transform: scale(0) translate(0, -50%);
					}

					&::before {
						top: 50%;
						transform: rotate(-45deg) translate(0, -50%);
					}

					&::after {
						bottom: 50%;
						transform: rotate(45deg) translate(0, 50%);
					}          
                `
            }
        }}
    }


    @media screen and (max-width: 576px) {
        width: 10vw;
		height: 6vw;
    }
`