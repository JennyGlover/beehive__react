import { useContext } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/friends" className="Navigation__link">
          <p className="Navigation__page-link">
            👯‍♀️ Friends{" "}
            <span className="Navigation__link-counter Navigation__friend-counter">
              0
            </span>
          </p>
        </Link>
        <Link to="/" className="Navigation__link">
          <p className="Navigation__page-link Navigation__buzz-link">
            💬 Messages <span className="Navigation__link-counter">0</span>
          </p>
        </Link>
      </div>
      <hr className="Navigation__line"></hr>
      <p className="Navigation__page-link Navigation__profile-Modal-link ">
        🐝 Profile
      </p>
    </div>
  );
}

export default Navigation;
