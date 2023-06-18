import React from "react";
import logoHeader from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = ({ isLoggedIn }) => {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <img className="header__logo" src={logoHeader} alt="картинка Место" />
        {location.pathname === "/sign-up" && (
          <Link to="/sign-in" className="header__link">
            Вход
          </Link>
        )}
        {location.pathname === "/sign-in" && (
          <Link to="/sign-up" className="header__link">
            Регистрация
          </Link>
        )}
        {isLoggedIn && (
          <nav className="header__navigation">
            <span>email</span>  
            <Link to="/sign-in" className="header__link">
              Выйти
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
