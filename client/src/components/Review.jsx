import React from 'react';
import User from './User.jsx';

const Review = (props) => (
  <article>
    <User/>
    <div id="reviewBody">
      <div id="reviewScores">
        <div id="reviewStarsDate">
          <div id="reviewStars">
          
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
      <br/>
      <div id="reviewText">
        {props.text}
      </div>
    </div>
    <hr/>
  </article>
);

export default Review;