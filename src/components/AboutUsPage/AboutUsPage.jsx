import { Header } from "components/AboutUsPage/Header/Header"
import { AboutUsMain } from "./AboutUsMain/AboutUsMain"
import { Сomparison } from './Сomparison/Сomparison'
import { Details } from "./Details/Details"
import { Advantages } from "./Advantages/Advantages"
import { Gifts } from "./Gifts/Gifts"
import { Questions } from "./Questions/Questions"
import { Footer } from "components/Footer/Footer"

export function AboutUsPage({changePage}) {
    return (
        <>
            <Header changePage={changePage} />
            <main>
                <AboutUsMain />
                <Сomparison />
                <Details />
                <Advantages />
                <Gifts />
                <Questions />
            </main>
            <Footer />
        </>
    )
}