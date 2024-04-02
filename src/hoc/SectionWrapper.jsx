// REACT IMPORT
import { motion } from "framer-motion";

// UTILS
import { staggerContainer } from "@/utils/motion";

// STYLES
import { styles } from "@/styles/styles";

const StarWrapper = (Component, idName, theme) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component theme={theme}/>
      </motion.section>
    );
  };

export default StarWrapper;
