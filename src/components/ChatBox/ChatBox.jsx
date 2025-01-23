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
        {/* {messageValues.map(() =>{
          if(messageValues.chattext) {
            <ChatCard position="right" />
          }
        })}
        {/* <ImageCard position="right" />
        <TimeSent position="right" /> */}
      </div>
    </div>
  );
}

export default ChatBox;
