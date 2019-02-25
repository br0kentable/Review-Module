import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar as emptyFaStar } from '@fortawesome/free-regular-svg-icons';
library.add(faStar);
// library.add(emptyFaStar);
import Review from './Review.jsx';
import TagsSorting from './TagsSorting.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [{ "id": 1, "userId": 42, "restaurantId": "thfUjkN4Tv", "reviewDate": "2019-02-21", "text": "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.", "tags": "Vibrant Bar Scene, Organic, Quick Bite, Open Kitchen, Cellar, Couples, Vegan", "overallScore": 4, "foodScore": 3, "serviceScore": 3, "ambienceScore": 5, "valueScore": 4, "noise": 1, "recommend": "Y", "createdAt": "2019-02-15T20:26:17.000Z", "updatedAt": "2019-02-15T20:26:17.000Z",
      "user":{"id":38,"username":"MikeS","location":"Seattle","vip":"Yes", "reviewNumber":10}},
      { "id": 2, "userId": 34, "restaurantId": "thfUjkN4Tv", "reviewDate": "2019-02-22", "text": "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.", "tags": "Vibrant Bar Scene, Organic, Quick Bite, Open Kitchen, Cellar, Couples, Vegan", "overallScore": 4, "foodScore": 3, "serviceScore": 3, "ambienceScore": 5, "valueScore": 4, "noise": 1, "recommend": "Y", "createdAt": "2019-02-15T20:26:17.000Z", "updatedAt": "2019-02-15T20:26:17.000Z",
      "user":{"id":34,"username":"MikeR","location":"Seattle","vip":"No", "reviewNumber":7}}],
      filteredReviews: [{ "id": 1, "userId": 42, "restaurantId": "thfUjkN4Tv", "reviewDate": "2019-02-21", "text": "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.", "tags": "Vibrant Bar Scene, Organic, Quick Bite, Open Kitchen, Cellar, Couples, Vegan", "overallScore": 4, "foodScore": 3, "serviceScore": 3, "ambienceScore": 5, "valueScore": 4, "noise": 1, "recommend": "Y", "createdAt": "2019-02-15T20:26:17.000Z", "updatedAt": "2019-02-15T20:26:17.000Z",
      "user":{"id":38,"username":"MikeS","location":"Seattle","vip":"Yes", "reviewNumber":10}},
      { "id": 2, "userId": 34, "restaurantId": "thfUjkN4Tv", "reviewDate": "2019-02-22", "text": "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.", "tags": "Vibrant Bar Scene, Organic, Quick Bite, Open Kitchen, Cellar, Couples, Vegan", "overallScore": 4, "foodScore": 3, "serviceScore": 3, "ambienceScore": 5, "valueScore": 4, "noise": 1, "recommend": "Y", "createdAt": "2019-02-15T20:26:17.000Z", "updatedAt": "2019-02-15T20:26:17.000Z",
      "user":{"id":34,"username":"MikeR","location":"Seattle","vip":"No", "reviewNumber":7}}],
      popularTags: ['Organic', 'Quick Booty'],
      checkedTags: []
    };
    this.filterByTag = this.filterByTag.bind(this);
  }

  filterByTag(e){
    if (e.target.checked){
      this.setState({
        checkedTags: this.state.checkedTags.concat([e.target.labels[0].id]),
        filteredReviews: this.state.reviews.filter((review)=> {
          return this.state.checkedTags.every((tag)=> review.tags.indexOf(tag) > -1);
        })
      }, ()=>{console.log(this.state.filteredReviews)});
    } 
  }

  render() {
    var mappedReviews = this.state.filteredReviews.map((review, i) =>
      <Review
        key={'review' + i}
        date={review.reviewDate}
        scoreOverall={review.overallScore}
        scoreFood={review.foodScore}
        scoreService={review.serviceScore}
        scoreAmbience={review.ambienceScore}
        text={review.text}
        user={review.user} />
    );
    return (
      <div>
        <h1>test</h1>
        <TagsSorting tagList={this.state.popularTags} filterByTag={this.filterByTag} reviewNumber={this.state.reviews}/>
        {mappedReviews}
      </div>
    );
  }
}

export default App;

