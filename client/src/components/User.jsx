import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const User = (props) => {
  var vipStatus = props.userData.vip === 'Yes' ? 'VIP' : '';

  return (
    <div className="user">
      <div className="userPicture"></div>
      <div className="userData">
        <div className="userNameVip">
          <span className="userVip">{vipStatus}</span>
          <span className="userName">{props.userData.username}</span>
        </div>
        <span className="userLocation">{props.userData.location}</span>
        <div className="userReviewNumberOuter">
          <span className="userReviewNumberInner">
            <FontAwesomeIcon icon={["far", "comment-alt"]} className="commentsCount" />
            {` ${props.userData.reviewNumber} Reviews`}
          </span>
        </div>
      </div>
    </div>
  )
};

export default User;