import "./ChatCard.css";

function ChatCard({ position, text }) {
  return (
    <div className={`ChatCard ChatCard__position-${position}`}>
      <div className={`ChatCard__text-container`}>
        <div className="ChatCard__text ">
          {text}
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
