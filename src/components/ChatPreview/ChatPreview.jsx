import "./ChatPreview.css";

function ChatPreview() {
  return (
    <div className="ChatPreview">
      <div className="ChatPreview__receiver">
        <div className="ChatPreview__receiver-icon"></div>
        <div className="ChatPreview__text-container">
          <div className="ChatPreview__Receiver-name">David Chan</div>
          <div className="ChatPreview__Receiver-text">Hi Glena 😎</div>
        </div>
      </div>
      <p className="ChatPreview__time">2: 34pm</p>
    </div>
  );
}

export default ChatPreview;
