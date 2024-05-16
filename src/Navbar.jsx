import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      <header>
        <h1>
          <Link to="/">Logo</Link>
        </h1>

        {state?.logged ? (
          <div className="user">
            <nav>
              <Link to="/perfil">Perfil</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/dates">Datos pesonales</Link>
              <Link to="/likes">Me gusta</Link>

            </nav>
            <span className="username">{state?.name}</span>
            <button className="btn-logout" onClick={onLogout}>
              Cerrar sesion
            </button>
          </div>
        ) : (
          <nav>
            <Link to="/contact">Contactos</Link>
            <Link to="/news">Novedades</Link>
            <Link to="/creator">Creador</Link>

            <Link to="/login">Iniciar sesion</Link>
            <Link to="/register">Registrarse</Link>
          </nav>
        )}
      </header>

      <Outlet />
    </>
  );
};

export default Navbar;
