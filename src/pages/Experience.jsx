import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles/styles";
import { experiences } from "../utils";
import { textVariant } from "../utils/motion";

import '../styles/experience.scss';

const ExperienceCard = ({ experience, theme }) => {
    return (
        <VerticalTimelineElement
        contentStyle={{
            background: theme.experience.cardBackground,
            color: theme.colors.text,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${theme.experience.cardDot}` }}
        date={experience.date}
        iconStyle={{ background: theme.experience.cardDot }}
        icon={
            <div className='flex justify-center items-center w-3/5 h-3/5' />
        }
        >
        <div>
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            <p
            className={`text-[#171717] text-[16px] font-semibold`}
            style={{ margin: 0 }}
            >
            {experience.company_name}
            </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2 text-white'>
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