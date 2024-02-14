import { FooterComponent, FooterContainer, FooterLogo, Rights } from "./Footer.styled";
import { H4 } from "components/Global.styled";
import logoRights from '../../images/logo-rights.png'

export function Footer() {
    return (
        <FooterComponent>
            <FooterContainer>
                <FooterLogo src={logoRights} />
                <Rights>
                    <H4 weight='400' color="rgba(255, 255, 255, 0.3)">
                        © 2022, ООО "Тиксан Групп" 
                        <br />
                        ОГРН 1212400014507
                        <br />
                        ИНН 2465340123
                        <br />
                        660135, г. Красноярск, ул. Октябрьская, 8а
                    </H4>
                </Rights>
            </FooterContainer>
        </FooterComponent>
    )
}