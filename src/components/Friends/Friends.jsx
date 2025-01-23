import { useState } from "react";
import FriendsCard from "../FriendsCard/FriendsCard";
import FriendsSmallCard from "../FriendsSmallCard/FriendsSmallCard";
import "./Friends.css";

function Friends() {

  const [ isFriendsVisible, setIsFriendsVisible ] = useState(true);
  const [ isRequestsVisible, setIsRequestsVisible ] = useState(false);

  
  return (
    <div className="Friends">
      <div>
        <div className="Friends__search-input-container">
          <p className="Friends__heading">Find Friends on BeeHive</p>
          <span className="Friends__search-container">
            <input
              type="text"
              className="Friends__search"
              placeholder="Search"
            />
            <div className="Friends__search-icon"></div>
          </span>
        </div>
        <div className="Friends__search-results"> 
          <FriendsCard />
        {/* build result pagination later */}
        </div>
        <div className="Friends__container">
        <div className="Friends__display-menu">
          <p 
          className={isFriendsVisible? "Friends__sub-heading_type-clicked" : "Friends__sub-heading"}
          onClick={() => {
            setIsFriendsVisible(true);
            setIsRequestsVisible(false);
          }}
          >All Friends</p>
          <p className={isRequestsVisible? "Friends__sub-heading_type-clicked" : "Friends__sub-heading"}
           onClick={() => {
            setIsFriendsVisible(false);
            setIsRequestsVisible(true);
          }}
          >Friend Requests</p></div>
          <div className={isFriendsVisible?  "Friends__friends-cards" : "Friends__friends-cards_display-none"}>
            <FriendsSmallCard name="Laura lee"/>
          </div>
          <div className={isRequestsVisible?  "Friends__friends-cards" : "Friends__friends-cards_display-none"}>
            <FriendsSmallCard name="Maya Ryan🍀"/>
            <FriendsSmallCard name="Diamond 💎"/>

          </div>

        </div>
        {/* <div className="Friends__all-friends">No friends to display</div> */}

      </div>
    </div>
  );
}

export default Friends;
