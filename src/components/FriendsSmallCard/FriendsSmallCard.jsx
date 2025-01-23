import "./FriendsSmallCard.css";

function FriendsSmallCard({ name }) {
  return (
    <div className="FriendsSmallCard">
      <div className="FriendsSmallCard__user-info">
        <div className="FriendsSmallCard__profile-icon"></div>
        <div className="FriendsSmallCard__name-container">
          <p className="FriendsSmallCard__name">
            {name}
            <button className="FriendsSmallCard__frnd-message-btn">
              Message
            </button>
          </p>
        </div>
      </div>
      {/* add friends or message btn */}
    </div>
  );
}

export default FriendsSmallCard;
