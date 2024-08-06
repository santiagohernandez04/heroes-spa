import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const {login} = useContext(AuthContext)
  const navigate = useNavigate();

  

  const onLogin = () => {
    // Guarda la última ruta visitada en el localStorage
    const lastPath = localStorage.getItem("lastPath") || "/";

    login( 'Santiago Hernandez' );

    navigate(lastPath,{
      // Reemplaza la ruta actual en la pila de historial
      replace: true
  });
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button 
      onClick={onLogin}
      className="btn btn-primary">Login</button>
    </div>
  )
}
