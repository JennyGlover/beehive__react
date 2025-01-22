import { useContext, useState } from "react";
import MusicSearch from "../MusicSearch/MusicSearch";
import MusicSelection from "../MusicSelection/MusicSelection";
import {
  MusicSearchContext,
  ImageInputContext,
} from "../../contexts/AppContexts";
import useForm from "../../hooks/useForm";
import "./ChatInputField.css";

function ChatInputField() {
  const [imageUrl, setImageUrl] = useState(""); //input url
  const [isValidImage, setIsValidImage] = useState(false);
  
  const { values, handleChange } = useForm({
    chattext: "",
  });
 
  const {
    handleSearchOpen,
    isMusicSelVisible,
    isSearchVisible,
    handleMusicSelClose,
  } = useContext(MusicSearchContext);
  const { isImgInputVisible, handleImgInputOpen, handleImgInputClose } =
    useContext(ImageInputContext);

  return (
    <div className="ChatInputField">
      <MusicSelection />

      <form action="" className="ChatInputField__form"></form>

      <div
        className={
          isValidImage
            ? "ChatInputField__img-preview"
            : "ChatInputField__img-preview_display-none"
        }
      >
        <img className="ChatInputField__img" src={"imageUrl"} alt="preview" />
      </div>

      <textarea
        name="chattext"
        rows="4"
        cols="50"
        value={values.chattext}
        className={
          isMusicSelVisible || (isImgInputVisible && isValidImage)
            ? "ChatInputField__textarea ChatInputField__textarea_style-music"
            : "ChatInputField__textarea"
        }
        onChange={(e) => handleChange(e)}
        placeholder="Write a message..."
      />
      <div
        className={
          isImgInputVisible && !isSearchVisible
            ? "ChatInputField__url-container"
            : "ChatInputField__url-container_display-none"
        }
      >
        <input
          className="ChatInputField__image-input"
          type="url"
          name="image"
          value=""
          id="chat-image-input"
          placeholder="Enter an image url"
        />
        <div
          className="ChatInputField__close-btn"
          onClick={() => {
            handleImgInputClose();
          }}
        ></div>
      </div>
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
        <button type="submit" className={values.chattext || isMusicSelVisible?  "ChatInputField__send-btn" : "ChatInputField__send-btn_type-disabled"}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInputField;
