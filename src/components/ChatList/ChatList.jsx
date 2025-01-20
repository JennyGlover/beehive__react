import ChatPreview from "../ChatPreview/ChatPreview";
import "./ChatList.css";

function ChatList() {
  return (
    <div className="ChatList">
      <span className="ChatList__search-container">
        <input type="text" className="ChatList__search" placeholder="Search" />
        <div className="ChatList__search-icon"></div>
      </span>
      <p className="ChatList__title">Chats</p>
      <hr className="ChatList__line ChatList__line_bold" />
      <ChatPreview />
    </div>
  );
}

export default ChatList;
