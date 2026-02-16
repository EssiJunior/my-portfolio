// REACT COMPONENTS
import { useTheme } from "styled-components";
import { memo } from "react";

// PLUGIN
import { VerticalTimelineElement } from "react-vertical-timeline-component";

// UTILITIES
import { experienceCardProps } from "@/utils/prop-types";

const ExperienceCard = memo(function ExperienceCard({ experience }) {
    const theme = useTheme();
    return (
        <VerticalTimelineElement
        contentStyle={{
            background: theme.experience.cardBackground,
            color: theme.experience.cardText,
            fontFamily:"Space Mono"
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${theme.experience.cardDot}` }}
        date={experience.date}
        iconStyle={{ background: theme.experience.cardDot }}
        icon={
            <div className='flex justify-center items-center w-3/5 h-3/5' />
        }
        >
        <div>
            <h3 className='text-3xl font-extrabold whitespace-nowrap overflow-hidden text-ellipsis'>{experience.title}</h3>
            <p
            className={`text-[16px]  font-plus_jakarta_sans`}
            style={{ margin: 0, color:theme.experience.cardHeadingText }}
            >
            {experience.company_name}
            </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2 font-plus_jakarta_sans'>
            {experience.points.map((point, index) => (
            <li
                key={`experience-point-${index}`}
                className='text-[14px] pl-1 tracking-wider'
            >
                {point}
            </li>
            ))}
        </ul>
        </VerticalTimelineElement>
    );
})

ExperienceCard.propTypes = experienceCardProps;
export default ExperienceCard