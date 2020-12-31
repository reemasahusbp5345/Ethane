import React from "react";
import Banner from "./Banner/Banner";
import Causes from "./Causes/Causes";
import SuccessStories from "./SuccessStories/SuccessStories";
import TalkToUs from "./TalkToUs/TalkToUs";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Causes />
      <WhatWeOffer />
      <SuccessStories />
      <TalkToUs />
    </div>
  );
}
