// REACT COMPONENTS IMPORTS
import { VerticalTimeline} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

// REACT COMPONENTS STYLE(S)
import "react-vertical-timeline-component/style.min.css";

// CUSTOMIZED COMPONENTS
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import SEO from "../components/SEO/SEO";

// UTILITIES
import { baseURL, experiences } from "../utils";
import { textVariant } from "../utils/motion";
import { themeProps } from "../utils/prop-types";

// STYLES
import { styles } from "../styles/styles";
import '../styles/experience.scss';

const Experience = ({theme}) => {
    return (
        <main className="experience py-12" style={{backgroundColor:`${theme.colors.bg}`, color:`${theme.colors.text}`}}>
            {/* SEO COMPONENT */}
            <SEO
                title={`Essi Junior's portfolio - Experience`} 
                description="This is Essi Junior's portfolio website experience page. Here you can view all his professional skills, public works and work mentatility."
                name='Essi Junior' 
                type='experience' 
                link={`${baseURL}/experience`} />
            
            <motion.div variants={textVariant()} className="mt-12">
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

Experience.propTypes = themeProps;
export default Experience;