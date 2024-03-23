
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
      margin: '0 auto',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;