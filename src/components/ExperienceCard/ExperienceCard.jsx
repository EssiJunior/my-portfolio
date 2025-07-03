// PLUGIN
import { VerticalTimelineElement } from "react-vertical-timeline-component";

// UTILITIES
import { experienceCardProps } from "@/utils/prop-types";

const ExperienceCard = ({ experience, theme }) => {
    return (
        <VerticalTimelineElement
        contentStyle={{
            background: theme.experience.cardBackground,
            color: theme.experience.cardText,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${theme.experience.cardDot}` }}
        date={experience.date}
        iconStyle={{ background: theme.experience.cardDot }}
        icon={
            <div className='flex justify-center items-center w-3/5 h-3/5' />
        }
        >
        <div>
            <h3 className='text-[24px] font-bold'>{experience.title}</h3>
            <p
            className={`text-[16px] font-semibold`}
            style={{ margin: 0, color:theme.experience.cardHeadingText }}
            >
            {experience.company_name}
            </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
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
};

ExperienceCard.propTypes = experienceCardProps;
export default ExperienceCard