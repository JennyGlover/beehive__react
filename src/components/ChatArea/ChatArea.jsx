import EmojiPickerContainer from "../EmojiPickerContainer/EmojiPickerContainer";
import ChatBox from "../ChatBox/ChatBox";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInputField from "../ChatInputField/ChatInputField";
import "./ChatArea.css";

function ChatArea() {
  return (
    <div className="ChatArea">
      <ChatHeader />
      <ChatBox />
      <EmojiPickerContainer />
      <ChatInputField />
    </div>
  );
}

export default ChatArea;
