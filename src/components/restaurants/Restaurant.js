import React, { Component } from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

class Restaurant extends Component {
  render() {
    const { deleteRestaurant, restaurant } = this.props;
    return (
      <div>
        <li>{restaurant.text}</li>
        <button onClick={() => deleteRestaurant(restaurant.id)}> X </button>
        <ReviewsContainer restaurant={restaurant} />
      </div>
    );
  }
}

export default Restaurant;
