import { VerticalTimeline} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles/styles";
import { experiences } from "../utils";
import { textVariant } from "../utils/motion";

import '../styles/experience.scss';
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";


const Experience = ({theme}) => {
    return (
        <main className="experience py-12" style={{backgroundColor:`${theme.colors.bg}`, color:`${theme.colors.text}`}}>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center ${theme.global.subHeading}`}>
                What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                    key={`experience-${index}`}
                    experience={experience}
                    theme={theme}
                    />
                ))}
                </VerticalTimeline>
            </div>
        </main>
    );
};

export default Experience;