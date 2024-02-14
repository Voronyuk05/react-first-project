import { MainPage } from "./MainPage/MainPage"
import { AboutUsPage } from "./AboutUsPage/AboutUsPage"
import { useState } from "react"


export const App = () => {
  const [page, setPage] = useState('Main')

  function handleChangePage(page) {
    setPage(page)
  }

  if (page === 'Main') {
    return (
      <>
        <MainPage changePage={handleChangePage} />
      </>
    )
  } else if (page === 'AboutUs') {
    return (
      <>
        <AboutUsPage changePage={handleChangePage}/>
      </>
    )
  } else {
    return (
      <h1>Error</h1>
    )
  }
}
