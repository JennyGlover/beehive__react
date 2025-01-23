import "./FriendsCard.css";

function FriendsCard() {
  return (
    <div className="FriendsCard">
      <div className="FriendsCard__user-info">
        <div className="FriendsCard__profile-icon"></div>
        <div className="FriendsCard__name-container">
          <p className="FriendsCard__name">
            ✨🌸 Laura Lee 🌸✨{" "}
            <span className="FriendsCard__Friendship">• Friends</span>
          </p>
          <p className="FriendsCard__quote">
            📞 Call me, 📟 Beep me, if you want to reach me 😊.
          </p>
        </div>
      </div>
      <button className="FriendsCard__frnd-request-btn FriendsCard__frnd-message-btn">
        Message
      </button>
      {/* add friends or message btn */}
    </div>
  );
}

export default FriendsCard;
