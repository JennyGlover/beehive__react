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
  
  //funct for displaying preview img
  const handleUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);

    //validating image url
    if(url.match(/\.(jpeg|jpg|gif|png|webp|svg)(\?.*)?$/i)){
      setIsValidImage(true);
      setIsImgPreviewVisible(true);
    } else {
      setIsValidImage(false);
    }
  };

  const {
    handleSearchOpen,
    isMusicSelVisible,
    isSearchVisible,
    handleMusicSelClose,
  } = useContext(MusicSearchContext);
  const { isImgInputVisible, handleImgInputOpen, handleImgInputClose, isImgPreviewVisible, setIsImgPreviewVisible } =
    useContext(ImageInputContext);

  return (
    <div className="ChatInputField">
      <MusicSelection />
      
      <form action="" className="ChatInputField__form"></form>

      <div
        className={
          isValidImage && isImgPreviewVisible
            ? "ChatInputField__img-preview"
            : "ChatInputField__img-preview_display-none"
        }
      >
        <div className="ChatInputField__img-container">
        <img className="ChatInputField__img" src={imageUrl} alt="preview" />
           <div
        className={!isImgPreviewVisible? "ChatInputField__img-close-btn_display-none" : "ChatInputField__img-close-btn"}
        onClick={() => {
          setIsImgPreviewVisible(false);
        }}
      ></div>
        </div>
      </div>

      <textarea
        name="chattext"
        rows="4"
        cols="50"
        value={values.chattext}
        className={
          isMusicSelVisible || (isImgPreviewVisible && isValidImage)
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
          value={values.image}
          id="image"
          placeholder="Enter an image url"
          onChange={(e) => handleUrlChange(e)}
        />
        <div
          className="ChatInputField__close-btn"
          onClick={() => {
            setIsImgPreviewVisible(false)
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
              setIsImgPreviewVisible(true);
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
