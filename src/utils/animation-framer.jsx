import { delay, easeIn } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale:0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: easeIn
    },
  },
};

const subTitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
      ease: easeIn
    },
  },
};


const headingLinesVariants = (x) => ({
  hidden: { opacity: 0, x: x },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
      ease: easeIn
    },
  },
});


const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
}

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
};


export { containerVariants, itemVariants, subTitleVariants, headingLinesVariants, cardHoverVariants, textVariants }