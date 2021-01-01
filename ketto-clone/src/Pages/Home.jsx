import React, { Component } from "react";
import Banner from "../Components/Banner/Banner";
import FollowTheseSimpleSteps from "../Components/FollowTheseSimpleSteps/FollowTheseSimpleSteps";
import Causes from "../Components/Causes/Causes";
import SuccessStories from "../Components/SuccessStories/SuccessStories";
import TalkToUs from "../Components/TalkToUs/TalkToUs";
import WhatWeOffer from "../Components/WhatWeOffer/WhatWeOffer";
import TrendingFundraisers from "../Components/TrendingFundraisers/TrendingFundraisers";

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <TrendingFundraisers />
        <FollowTheseSimpleSteps />
        <Causes />
        <WhatWeOffer />
        <SuccessStories />
        <TalkToUs />
      </div>
    );
  }
}

export default Home;
