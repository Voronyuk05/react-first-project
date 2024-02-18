import styled from "styled-components";
import giftIcon from '../../../images/gift.png'


export const GiftsComponent = styled.section`
    width: 100%;
    height: 46vw;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 992px) {
        height: 90vw;
    }

    @media screen and (max-width: 576px) {
        height: 270vw;
    }

    @media screen and (max-width: 380px) {
        height: 300vw;
    }
`

export const GiftsContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3vw;
    @media screen and (max-width: 576px) {
        gap: 6vw;
    }
`

export const GiftsTitle = styled.div`
    width: 30vw;
    @media screen and (max-width: 992px) {
        width: 60vw;
    }

    @media screen and (max-width: 576px) {
        width: 90vw;
        h2 {
            font-size: 7vw;
        }
    }
`

export const WrapperGifts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10vw;
    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`


export const FrontGift = styled.div`
    position: absolute;
    backface-visibility: hidden;
    width: inherit;
    height:inherit;
    background-image: url(${giftIcon});
    background-size: contain;
    background-repeat: no-repeat;
    box-sizing: border-box;
    padding: 2vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: 0.6s;
    border-radius: 1.87vw;
    &:hover {
        transition: 0.3s;
        transform: scale(1.05);
    }

`

export const FrontGiftTitle = styled.div`
    width: 100%;
    margin-top: 1vw;
    @media screen and (max-width: 576px) {
        h2 {
            font-size: 7vw;
        }
    }
`

export const Sign = styled.img`
    position: absolute;
    top: 1vw;
    right: 1vw;
    width: 2vw;
    height: 2vw;
    @media screen and (max-width: 992px) {
        width: 3vw;
        height: 3vw;
        top: 2vw;
        right: 2vw;
    }

    @media screen and (max-width: 576px) {
        width: 6vw;
        height: 6vw;
        top: 4vw;
        right: 4vw;
    }
`

export const BackGift = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    backface-visibility: hidden;
    border-radius: 1.875vw;
    padding: 1.5vw 2.1vw 1vw 2.1vw;
    position: absolute;
    width: inherit;
    height:  inherit;
    transform: rotateY(180deg) ;
    background-color: #EDEDED;
    transition: 0.6s;
    box-sizing: border-box;
    @media screen and (max-width: 992px) {
        p {
            text-align: center;
        }
    }
    @media screen and (max-width: 576px) {
        padding-bottom: 3vw;
        h2 {
            font-size: 7vw;
        }
        p {
            font-size: 4vw;
        }
    }

    @media screen and (max-width: 380px) {
        padding: 3vw 5vw 3vw 5vw;
    }
`

export const BackGiftImg = styled.div`
    display: flex;
    gap: 3vw;
`

export const DiscountImg = styled.img`
    width: 12vw;
    @media screen and (max-width: 992px) {
        width: 20vw;
    }

    @media screen and (max-width: 576px) {
        width: 40vw;
    }

    @media screen and (max-width: 380px) {
        width: 50vw;
    }
`

export const GadjetImg = styled.img`
    width: 5.2vw;
    @media screen and (max-width: 992px) {
        width: 8vw;
    }

    @media screen and (max-width: 576px) {
        width: 16vw;
    }

    @media screen and (max-width: 380px) {
        width: 20vw;
    }
`

export const BackGiftParagraph = styled.div`
    width: 90%;
    @media screen and (max-width: 576px) {
        width: 95%;
    }
`

export const GiftCard = styled.div`
    border-radius: 1.875vw;
    width: 22.4vw;
    height: 30.2vw;
    position: relative;
    perspective: 1000px;
    ${({number, choosed}) => {
        if (choosed !== 0 & number === choosed) { 
            return `
                & div${FrontGift} {
                    transition: 0.6s;
                    transform: rotateY(180deg);
                }
                & div${BackGift} {
                    transition: 0.6s;
                    transform: rotateY(360deg) ;
                }      
            `
        } else if ( choosed !== 0 & number !== choosed)  {
            return `

                & div${FrontGift} {
                    filter: grayscale(80%);
                    transition: 0.6s;
                    &:hover {
                        transition: 0.3s;
                        transform: scale(1);
                    }
                }  
            `
        }
    }}

    @media screen and (max-width: 992px) {
        width: 40vw;
        height: 53.9vw;
    }

    @media screen and (max-width: 576px) {
        width: 80vw;
        height: 108vw;
    }

    @media screen and (max-width: 380px) {
        width: 90vw;
        height: 120vw;
        button {
            font-size: 3vw;
        }
    }
`