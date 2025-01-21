
import "./ChatInputField.css";

function ChatInputField () {

    return (
      <div className="ChatInputField">        
      <textarea name="chattext"  rows="4" cols="50"  className="ChatInputField__textarea" placeholder="Write a message..." />
      <div className="ChatInputField__menu">
    <div className="ChatInputField__file-btns">
     <button className="ChatInputField__file-btn">🖼️</button>
     <button className="ChatInputField__file-btn">🗂️</button>
     <button className="ChatInputField__file-btn">😄</button>
     </div>
      <button className="ChatInputField__send-btn" disabled>Send</button>
      </div>
</div>
    );
}

export default ChatInputField;
