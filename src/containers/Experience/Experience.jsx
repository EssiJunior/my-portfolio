import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles/styles";
import { experiences } from "../../utils";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
        contentStyle={{
            background: "#004d2f",
            color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #eeba00" }}
        date={experience.date}
        iconStyle={{ background: '#eeba00' }}
        icon={
            <div className='flex justify-center items-center w-3/5 h-3/5' />
        }
        >
        <div>
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
            >
            {experience.company_name}
            </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
            <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
                {point}
            </li>
            ))}
        </ul>
        </VerticalTimelineElement>
    );
};

const Experience = ({theme}) => {
    return (
        <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center`}>
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
                />
            ))}
            </VerticalTimeline>
        </div>
        </>
    );
};

export default Experience;