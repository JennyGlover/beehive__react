import "./ChatCard.css";

function ChatCard({ position }) {
  return (
    <div className={`ChatCard ChatCard__position-${position}`}>
      <div className={`ChatCard__text-container`}>
        <div className="ChatCard__text ">
          Shall I compare thee to a summer's day? Thou art more lovely and more
          temperate: Rough winds do shake the darling buds of May,
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
