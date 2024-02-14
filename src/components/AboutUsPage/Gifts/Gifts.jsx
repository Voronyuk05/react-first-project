import { useState } from "react";
import { GiftsComponent, GiftsContainer, GiftsTitle, WrapperGifts, GiftCard, FrontGift, FrontGiftTitle, Sign, BackGift, BackGiftImg, DiscountImg, GadjetImg, BackGiftParagraph } from "./Gifts.styled";
import { H2, Paragraph, OrangeButton, HugeOrangeButton, GrayDarkButton } from "components/Global.styled";
import signLightIcon from '../../../images/sign-light.png'
import signDarkIcon from '../../../images/sign-dark.png'
import discountIcon from '../../../images/discount.png'
import smartphoneIcon from '../../../images/smartphone.png'
import termoregulatorIcon from '../../../images/termoregulator.png'

export function Gifts() {
    const [choosed, setChoosed] = useState(0)
    function handleTransformChange(number) {
        if (choosed === 0) {
            setChoosed(number)
        }
    }

    return (
        <GiftsComponent>
            <GiftsContainer>
                <GiftsTitle>
                    <H2 color="#443C49" weight='700' transform='uppercase' align='center'>Выберите подарок</H2>
                </GiftsTitle>
                    <WrapperGifts>
                        <GiftCard  onClick={() => handleTransformChange(1)} number={1} choosed={choosed}>
                            <FrontGift>
                                <Sign src={signLightIcon} />
                                <FrontGiftTitle><H2 color="white" weight='700' transform='uppercase' align='start'>подарок #1</H2></FrontGiftTitle>
                            </FrontGift>
                            <BackGift>
                                <Sign src={signDarkIcon} />
                                <BackGiftImg>
                                    <DiscountImg src={discountIcon}/>
                                </BackGiftImg>
                                <H2 color="#443C49" align='center'>Скидка на монтаж</H2>
                                <Paragraph color="#443C49">
                                    Монтаж 1 -3 дня в зависимости от площади помещения. Монтаж можно произвести в стяжку или сухим способом в специальную плиту.
                                </Paragraph>
                                <OrangeButton>Скидка на монтаж</OrangeButton>
                            </BackGift>
                        </GiftCard>
                        <GiftCard onClick={() => handleTransformChange(2)} number={2} choosed={choosed}>
                            <FrontGift>
                                <Sign src={signLightIcon} />
                                <FrontGiftTitle><H2 color="white" weight='700' transform='uppercase' align='start'>подарок #2</H2></FrontGiftTitle>
                            </FrontGift>
                            <BackGift>
                                <Sign src={signDarkIcon} />
                                <BackGiftImg>
                                    <GadjetImg src={smartphoneIcon}/>
                                    <GadjetImg src={termoregulatorIcon}/>
                                </BackGiftImg>
                                <GrayDarkButton href="https://disk.yandex.ru/i/-Ut0yIo_KWgtjA">Смотреть видео</GrayDarkButton>
                                <H2 color="#443C49"  align='center'>Терморегулятор в подарок</H2>
                                <BackGiftParagraph>
                                    <Paragraph color="#443C49">
                                        Регулируйте отопление с телефона. Экономьте на переплате понижая температуру при уходе и повышая перед возвращением.
                                    </Paragraph>
                                </BackGiftParagraph>
                                <HugeOrangeButton>Терморегулятор управления системой</HugeOrangeButton>
                            </BackGift>
                        </GiftCard>
                    </WrapperGifts>
            </GiftsContainer>
        </GiftsComponent>
    )
}