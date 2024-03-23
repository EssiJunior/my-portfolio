import { VerticalTimelineElement } from "react-vertical-timeline-component";

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

export default ExperienceCard