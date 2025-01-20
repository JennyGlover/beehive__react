import ChatContainer from "../ChatContainer/ChatContainer";
import Header from "../Header/Header";
import "./Messages.css";

function Messages() {
  return (
    <div className="Messages">
      <Header />
      <ChatContainer />
    </div>
  );
}

export default Messages;
