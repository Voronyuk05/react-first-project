import { Nav } from "./Navigation.styled"

export function Navigation({checked, changePage, children}) {
    return (
        <Nav checked={checked}>
            {children}
        </Nav>
    )
}