import ChatCard from "../ChatCard/ChatCard";
import ImageCard from "../ImageCard/ImageCard";
import MusicCard from "../MusicCard/MusicCard";
import TimeSent from "../TimeSent/TimeSent";

import "./ChatBox.css";

function ChatBox() {
  return (
    <div className="ChatBox">
      <div className="ChatBox__container">
        <ChatCard position="right" />
        <ImageCard position="right" />
        <TimeSent position="right" />
      </div>
    </div>
  );
}

export default ChatBox;
