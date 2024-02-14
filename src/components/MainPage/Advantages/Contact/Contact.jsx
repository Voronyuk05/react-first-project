import {ContactComponent, ContactImg, ContactForm, SearchBox, Input, Agreements, SearchBoxIcon, Line} from './Contact.styled';
import {FontDark, H3Small, PrimaryButtonP, Checkbox, ParagraphTiny } from "components/Global.styled";
import contactImg from '../../../../images/contact-img.png'
import userIcon from '../../../../images/user-icon.png'
import phoneIcon from '../../../../images/phone-icon.png'
import verticalLineIcon from '../../../../images/vertical-line-icon.png'


export function Contact() {
    return (
    <ContactComponent>
        <ContactForm>
            <H3Small weight='400'><FontDark>Узнайте стоимость</FontDark> и получите бесплатную консультацию <FontDark>прямо сейчас!</FontDark></H3Small>
            <SearchBox>
                <SearchBoxIcon src={userIcon} />
                <Line src={verticalLineIcon} alt="" />
                <Input placeholder="Введите имя" />
            </SearchBox>
            <SearchBox>
                <SearchBoxIcon src={phoneIcon} />
                <Line src={verticalLineIcon} alt="" />
                <Input placeholder="Введите телефон" />
            </SearchBox>
            <PrimaryButtonP>
                Узнать стоимость
            </PrimaryButtonP>
            <Agreements>
                <Checkbox type="checkbox" />
                <ParagraphTiny>
                    Я согласен с политикой обработки персональных данных 
                </ParagraphTiny>
            </Agreements>
        </ContactForm>
        <ContactImg src={contactImg} />
    </ContactComponent>
    )
}