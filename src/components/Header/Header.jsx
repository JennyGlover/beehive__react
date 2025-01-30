import { useContext } from "react";
import { HeaderContext } from "../../contexts/AppContexts";
import logo from "../../assets/beehive-logo.png";
import ProfileModal from "../ProfileModal/ProfileModal";
import "./Header.css";

function Header() {

  const { isProfileVisible, setIsProfileVisible, handleOpenProfileModal } = useContext(HeaderContext);
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
            <div 
            className="Header__profile-icon"
            onClick={() => {
              handleOpenProfileModal()
            }}
            ></div>
            <p className="Header__profile-name">Glena Hanz </p>
          </div>
        </div>
      </div>
      <p className="Header__friends-"></p>
      <ProfileModal />
    </div>
  );
}

export default Header;
