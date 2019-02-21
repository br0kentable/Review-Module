import React from 'react';
import Review from './Review.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [{ "id": 1, "userId": 42, "restaurantId": "thfUjkN4Tv", "reviewDate": "2017-05-28", "text": "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.", "tags": "Vibrant Bar Scene, Organic, Quick Bite, Open Kitchen, Cellar, Couples, Vegan", "overallScore": 4, "foodScore": 3, "serviceScore": 3, "ambienceScore": 5, "valueScore": 4, "noise": 1, "recommend": "Y", "createdAt": "2019-02-15T20:26:17.000Z", "updatedAt": "2019-02-15T20:26:17.000Z" }]
    };
  }

  render() {
    var mappedReviews = this.state.reviews.map((review) =>
      <Review
        date={review.reviewDate}
        scoreOverall={review.overallScore}
        scoreFood={review.foodScore}
        scoreService={review.serviceScore}
        scoreAmbience={review.ambienceScore}
        text={review.text} />
    );
    return (
      <div>
        <h1>test</h1>
        {mappedReviews}
        {/* <Review scoreOverall={4}/> */}
      </div>
    );
  }
}

export default App;

