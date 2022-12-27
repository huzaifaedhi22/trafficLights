import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./iotanimation.json";

const Iotanimation = () => (
  <Lottie
    animationData={groovyWalkAnimation}
    loop={true}
    width={600}
    height={600}
  />
);

export default Iotanimation;
