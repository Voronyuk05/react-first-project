import { HeaderComponent, WrapperLogo, WrapperContacts, Contact, Burger } from './Header.styled'
import { Logo } from 'components/Logo/Logo';
import { PrimaryButton, Container } from "components/Global.styled";
import { Navigation } from "components/Navigation/Navigation";
import { Link } from "components/Global.styled"
import { useState } from 'react';

export function Header({changePage}) {
    const [checked, setChecked] = useState(false)

    return (
        <HeaderComponent>
            <Container>
                <WrapperLogo>
                    <Logo />
                    <Navigation checked={checked}  changePage={changePage}>
                        <Burger checked={checked} onClick={() => setChecked(!checked)}>
                            <span></span>
                        </Burger>
                        <Link onClick={() => changePage('Main')}>Главная</Link>
                        <Link onClick={() => changePage('AboutUs')}>О системе</Link>
                        <Link onClick={() => changePage('History')}>Монтаж</Link>
                        <Link onClick={() => changePage('History')}>Объекты</Link>
                        <Link onClick={() => changePage('History')}>Отзывы</Link>
                        <Link onClick={() => changePage('History')}>О компании</Link>
                        <Link onClick={() => changePage('History')}>Контакты</Link>
                    </Navigation>
                    <Burger checked={checked} onClick={() => setChecked(!checked)}>
                    <span></span>
                    </Burger>
                </WrapperLogo>
                <WrapperContacts>
                    <Contact>8 (800) 700-80-40</Contact>
                    <PrimaryButton>
                        Заказать звонок
                    </PrimaryButton>
                </WrapperContacts>
            </Container>
        </HeaderComponent>
    )
}