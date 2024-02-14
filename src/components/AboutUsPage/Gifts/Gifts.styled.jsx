import styled from "styled-components";
import giftIcon from '../../../images/gift.png'


export const GiftsComponent = styled.section`
    width: 100%;
    height: 46vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const GiftsContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3vw;
`

export const GiftsTitle = styled.div`
    width: 30vw;
`

export const WrapperGifts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10vw;
`


export const FrontGift = styled.div`
    position: absolute;
    backface-visibility: hidden;
    width: 22.4vw;
    height: 30.2vw;
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
`

export const Sign = styled.img`
    position: absolute;
    top: 1vw;
    right: 1vw;
    width: 2vw;
    height: 2vw;
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
    width: 22.4vw;
    height: 30.2vw;
    transform: rotateY(180deg) ;
    background-color: #EDEDED;
    transition: 0.6s;
    box-sizing: border-box;
`

export const BackGiftImg = styled.div`
    display: flex;
    gap: 3vw;
`

export const DiscountImg = styled.img`
    width: 12vw;
`

export const GadjetImg = styled.img`
    width: 5.2vw;
`

export const BackGiftParagraph = styled.div`
    width: 90%;
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
`