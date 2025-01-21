import ChatCard from "../ChatCard/ChatCard";
import ImageCard from "../ImageCard/ImageCard";
import MusicCard from "../MusicCard/MusicCard";
import "./ChatBox.css";

function ChatBox() {
  return (
    <div className="ChatBox">
      <div className="ChatBox__container">
        <MusicCard position="left" />
        <MusicCard position="right" />
        <ChatCard position="left" />
        <ChatCard position="right" />
        <ImageCard position="right" />
        <ImageCard position="left" />
      </div>
    </div>
  );
}

export default ChatBox;
