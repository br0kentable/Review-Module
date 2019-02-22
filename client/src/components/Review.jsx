import React from 'react';
import User from './User.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Review = (props) => {
  var stars = []
  for (var i = 0; i < props.scoreOverall; i++) {
    stars.push(<FontAwesomeIcon key={"score" + i} icon="star" className="filledScore" />);
  }
  for (var i = 0; i < (5 - props.scoreOverall); i++){
    stars.push(<FontAwesomeIcon key={"emptyScore" + i} icon="star" className="emptyScore" />);
  }
  return (
    <article>
      <User />
      <div id="reviewBody">
        <div id="reviewScores">
          <div id="reviewStarsDate">
            <div id="reviewStars">
              {stars}
            </div>
            <div id="reviewDate">
              <span id="date">{props.date}</span>
            </div>
          </div>
          <div id="otherScores">
            <span id="scoreOverallText">Overall </span>
            <span id="scoreOverallNumber">{props.scoreOverall} </span>
            <span id="scoreFoodText">Food </span>
            <span id="scoreFoodNumber">{props.scoreFood} </span>
            <span id="scoreServiceText">Service </span>
            <span id="scoreServiceNumber">{props.scoreService} </span>
            <span id="scoreAmbienceText">Ambience </span>
            <span id="scoreAmbienceNumber">{props.scoreAmbience}</span>
          </div>
        </div>
        <div id="reviewText">
          <p>{props.text}</p>
        </div>
      </div>
      <hr />
    </article>
  );
}


export default Review;