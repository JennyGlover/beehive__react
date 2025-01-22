import { useContext } from "react";
import MusicSearch from "../MusicSearch/MusicSearch";
import MusicSelection from "../MusicSelection/MusicSelection";
import {
  MusicSearchContext,
  ImageInputContext,
} from "../../contexts/AppContexts";
import "./ChatInputField.css";

function ChatInputField() {
  const {
    handleSearchOpen,
    isMusicSelVisible,
    isSearchVisible,
    handleMusicSelClose,
  } = useContext(MusicSearchContext);
  const { isImgInputVisible, handleImgInputOpen } =
    useContext(ImageInputContext);

  const urlInputOpen = "ChatInputField__image-input";
  const urlInpuClose = "ChatInputField__image-input_display-none";

  return (
    <div className="ChatInputField">
      <MusicSelection />
      <form action="" className="ChatInputField__form"></form>
      <textarea
        name="chattext"
        rows="4"
        cols="50"
        className={
          isMusicSelVisible
            ? "ChatInputField__textarea ChatInputField__textarea_style-music"
            : "ChatInputField__textarea"
        }
        placeholder="Write a message..."
      />
      <input
        className={
          isImgInputVisible && !isSearchVisible ? urlInputOpen : urlInpuClose
        }
        type="url"
        name="image"
        value=""
        id="chat-image-input"
        placeholder="Enter an image url"
      />

      <MusicSearch />
      <div className="ChatInputField__menu">
        <div className="ChatInputField__file-btns">
          <button
            className="ChatInputField__file-btn"
            onClick={() => {
              handleImgInputOpen();
            }}
          >
            🖼️
          </button>
          <button
            className="ChatInputField__file-btn"
            onClick={() => {
              handleSearchOpen();
            }}
          >
            🎵
          </button>

          <button className="ChatInputField__file-btn">😄</button>
        </div>
        <button type="submit" className="ChatInputField__send-btn" disabled>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInputField;
