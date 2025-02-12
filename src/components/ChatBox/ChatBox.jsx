import { useContext } from "react";
import ChatCard from "../ChatCard/ChatCard";
import EmojiPicker from "emoji-picker-react";
import ImageCard from "../ImageCard/ImageCard";
import MusicCard from "../MusicCard/MusicCard";
import TimeSent from "../TimeSent/TimeSent";
import { ImageInputContext } from "../../contexts/AppContexts";

import "./ChatBox.css";

function ChatBox() {
  const { messageValues } = useContext(ImageInputContext);

  return (
    <div className="ChatBox">
      <div className="ChatBox__container">
       {messageValues.map((message, index) => (
        <div key={index}>
          {message.chattext && (
            <ChatCard position="right" text={message.chattext} />
          )}
          {message.image && (
            <ImageCard position="right" image={message.image} />
          )}
            {message.song && (
              <MusicCard position="right" song={message.song}
              />
            )}
          <TimeSent position="right" />
        </div>
        ))}
        
      </div>
    </div>
  );
}

export default ChatBox;
