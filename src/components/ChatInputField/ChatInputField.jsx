import { useContext } from "react";
import MusicSearch from "../MusicSearch/MusicSearch";
import MusicSelection from "../MusicSelection/MusicSelection";
import { MusicSearchContext } from "../../contexts/AppContexts";
import "./ChatInputField.css";

function ChatInputField() {
  const { handleSearchOpen } = useContext(MusicSearchContext);

  return (
    <div className="ChatInputField">
      <MusicSelection />
      <textarea
        name="chattext"
        rows="4"
        cols="50"
        className="ChatInputField__textarea"
        // className="ChatInputField__textarea ChatInputField__textarea_style-music"
        placeholder="Write a message..."
      />

      <MusicSearch />
      <div className="ChatInputField__menu">
        <div className="ChatInputField__file-btns">
          <button className="ChatInputField__file-btn">🖼️</button>
          <button
            className="ChatInputField__file-btn"
            onClick={() => {
              console.log("clicked");
              handleSearchOpen();
            }}
          >
            🎵
          </button>

          <button className="ChatInputField__file-btn">😄</button>
        </div>
        <button className="ChatInputField__send-btn" disabled>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInputField;
