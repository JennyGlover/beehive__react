import logo from "../../assets/beehive-logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Header__container">
        <p className="Header__page-title">Messages</p>
        <div className="Header__menu-container">
          <p className="Header__icon">
            💬<span className="Header__notification-dot"></span>
          </p>
          <p className="Header__icon">
            🔔<span className="Header__notification-dot"></span>
          </p>
          <div className="Header__profile-container">
            <div className="Header__profile-icon"></div>
            <p className="Header__profile-name">Glena Hanz </p>
          </div>
        </div>
      </div>
      <hr className="Header__line" />
      <p className="Header__friends-"></p>
    </div>
  );
}

export default Header;
