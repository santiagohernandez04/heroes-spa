import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/"
import { HeroesRoutes, MarvelPage } from "../heroes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        

        <Route path="/login" element=
          {
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        {/*Esta seria la forma si hay mas rutas aparte del loginPage
           Otra forma seria hacerla como HeroesRoutes
        <Routes>

        

        <Route path="login/*" element = 
        {
            <PublicRoute>
                /* <Route path="/*" element={<LoginPage/>} />
            </PublicRoute>
        }
        />

            {/* <Route path="login" element={<LoginPage/>} />
        */}


        <Route path="/*" element={<PrivateRoute>
          
          <HeroesRoutes />
        </PrivateRoute>} />
      </Routes>
    </>
  )
}
