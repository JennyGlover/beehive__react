import ChatArea from "../ChatArea/ChatArea";
import ChatList from "../ChatList/ChatList";
import "./ChatContainer.css";

function ChatContainer() {
  return (
    <div className="ChatContainer">
      <ChatList />
      <ChatArea />
    </div>
  );
}

export default ChatContainer;
