import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom"

export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext)

    // Guarda la última ruta visitada en el localStorage
    const {pathname, search} = useLocation()
    const lastPath = pathname + search
    localStorage.setItem("lastPath", lastPath)
    
    return (logged) ? children : <Navigate to="/login" />
}
