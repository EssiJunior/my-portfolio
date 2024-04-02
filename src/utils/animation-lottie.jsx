// REACT COMPONENT IMPORTS
import Lottie from "lottie-react";

// UTILS
import { lottieProps } from "./prop-types";

const AnimationLottie = ({ animation, width = '95%' }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    style: {
      width: width,
      margin: '0 auto',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

AnimationLottie.propTypes = lottieProps;
export default AnimationLottie;