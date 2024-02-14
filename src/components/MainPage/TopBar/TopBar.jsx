import { Container } from "components/Global.styled";
import { TopBarComponent, WrapperLocation, Location } from "./TopBar.styled";
import { Navigation } from "components/Navigation/Navigation";
import { LinkSecondary, H5, H5Secondary } from "components/Global.styled"


export function TopBar() {
    return (
        <TopBarComponent>
            <Container>
                <WrapperLocation>
                    <H5 color="white">Ваш город:</H5>
                    <Location>Красноярск</Location>
                    <H5Secondary   color="white" element={H5} >ул. Авиаторов, 62</H5Secondary>
                </WrapperLocation>
                <Navigation>
                    <LinkSecondary>О производителе</LinkSecondary>
                    <LinkSecondary>Гарантия</LinkSecondary>
                    <LinkSecondary>Доставка </LinkSecondary>
                    <LinkSecondary>Рассрочка</LinkSecondary>
                </Navigation>
            </Container>
        </TopBarComponent>
    )
}