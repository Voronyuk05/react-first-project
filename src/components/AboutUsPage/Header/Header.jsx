import { useState } from "react";
import { HeaderComponent, WrapperLogo, Button, LogoText, Container } from './Header.styled'
import { Logo } from 'components/Logo/Logo';
import { ConsultationForm } from "./ConsultationForm/ConsultationForm";

export function Header({changePage, children}) {
    const [modal, setModal] = useState(false)

    return (
        <HeaderComponent>
            <Container>
                <WrapperLogo>
                    <Logo changePage={changePage}/>
                    <LogoText>
                        Электро-водяное отопление от производителя
                    </LogoText>
                </WrapperLogo>
                <Button onClick={() => setModal(true)}>
                    Заказать консультацию
                </Button>
                <ConsultationForm modal={modal} setModal={setModal
                } />
            </Container>
        </HeaderComponent>
    )
}