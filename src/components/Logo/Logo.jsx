import { LogoComponent } from './Logo.styled'
import LogoSvg from './Logo.svg'

export function Logo({changePage}) {
    return (
        <LogoComponent onClick={() => changePage('Main')} src={LogoSvg} alt="" />
    )
}