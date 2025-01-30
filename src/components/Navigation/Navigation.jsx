import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/AppContexts";
import logo from "../../assets/beehive-logo.png";
import "./Navigation.css";

function Navigation() {
  const { isNavVisible } = useContext(AuthenticationContext);

  return (
    <div className={isNavVisible ? "Navigation" : "Navigation_display-none"}>
      <div className="Navigation__logo-container">
        <img className="Navigation__logo" src={logo} alt="BeeHive logo" />
        <p className="Navigation__logo-text">BeeHive</p>
      </div>
      <hr className="Navigation__line"></hr>
      <p className="Navigation__menu-text">Menu </p>
      <div className="Navigation__page-Links">
     
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "Navigation__link_active" : "Navigation__link"
          }
        >
          <p className="Navigation__page-link Navigation__message-link">
            💬 Messages
          </p>
        </NavLink>
           <NavLink
          to="/friends"
          className={({ isActive }) =>
            isActive ? "Navigation__link_active" : "Navigation__link"
          }
        >
          <p className="Navigation__page-link">👯‍♀️ Friends </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
