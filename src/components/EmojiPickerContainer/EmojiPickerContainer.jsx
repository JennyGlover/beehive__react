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
      onClick={(e) => {
        console.log(e.target.src);
      }}
    >
      <EmojiPicker height={440} width={350} />
    </div>
  );
}

export default EmojiPickerContainer;
