import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"
import { PublisherPage } from "../pages/PublisherPage"

export const HeroesRoutes = () => {
  return (
    <>
    <Navbar />
    <div className="container">

    <Routes>
            <Route path="/" element={<PublisherPage />} />
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />
            <Route path="search" element={<SearchPage/>} />
            <Route path="hero/:id" element={<HeroPage />} />
    </Routes>

    </div>
    </>

  )
}
