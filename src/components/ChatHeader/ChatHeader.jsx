import "./ChatHeader.css";

function ChatHeader() {
  return (
    <div className="ChatHeader">
      <div className="ChatHeader__receiver">
        <div className="ChatHeader__receiver-icon"></div>
        <div className="ChatHeader__text-container">
          <div className="ChatHeader__Receiver-name">David Chan</div>
          <div className="ChatHeader__Receiver-status-container">
            <div className="ChatHeader__status-dot"></div>
            <div className="ChatHeader__Receiver-status">Online</div>
          </div>
        </div>
      </div>
      <div className="ChatHeader__menu">
        <div className="ChatHeader__video-icon"></div>
        <button className="ChatHeader__profile-btn">View Profile</button>
      </div>
    </div>
  );
}

export default ChatHeader;
