import { useContext } from "react";
import { ImageInputContext } from "../../contexts/AppContexts";
import EmojiPicker from "emoji-picker-react";
import "./EmojiPickerContainer.css";

function EmojiPickerContainer() {
  const { isEmojiPickerVisible } = useContext(ImageInputContext);
  return (
    <div
      className={
        isEmojiPickerVisible
          ? "EmojiPickerContainer"
          : "EmojiPickerContainer__display-none"
      }
    >
      <EmojiPicker />
    </div>
  );
}

export default EmojiPickerContainer;
