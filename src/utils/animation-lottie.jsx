// REACT COMPONENT IMPORTS
import Lottie from "lottie-react";

// UTILS
import { lottieProps } from "./prop-types";

const AnimationLottie = ({ animation, width = '95%', margin='auto', height='auto' }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    style: {
      width: width,
      height: height,
      margin: margin,
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

AnimationLottie.propTypes = lottieProps;
export default AnimationLottie;