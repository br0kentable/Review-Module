import React from 'react';

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
          <span className="userReviewNumberInner">{props.userData.reviewNumber}</span>
        </div>
      </div>
    </div>
  )
};

export default User;