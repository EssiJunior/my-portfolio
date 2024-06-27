// PLUGIN
import { VerticalTimelineElement } from "react-vertical-timeline-component";

// UTILITIES
import { projectCardProps } from "../../utils/prop-types";

const ProjectCard = ({ project, theme }) => {
    return (
        <VerticalTimelineElement
        contentStyle={{
            background: theme.experience.cardBackground,
            color: theme.colors.text,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${theme.experience.cardDot}` }}
        date={project.role}
        iconStyle={{ background: theme.experience.cardDot }}
        icon={
            <div className='flex justify-center items-center w-3/5 h-3/5' />
        }
        >
        <div>
            {
                project.image !== '' &&
                <img src={project.image} alt="" className="my-10 w-4/5 m-auto"/>
            }
            <h3 className='text-white text-[24px] font-bold'>{project.name}</h3>
            <p
            className={`text-[#171717] text-[16px] font-semibold`}
            style={{ margin: 0 }}
            >
            {project.description}
            </p>
        </div>

        <div className='mt-5 list-disc space-y-2 grid grid-cols-2 md:grid-cols-3'>
            {project.tools.map((tool, index) => (
            <span
                key={`project-tool-${index}`}
                className={`text-white-100 text-[14px] pl-1 m-2 tracking-wider ${theme.experience.skillDot} flex items-center justify-center rounded-2xl`}
            >
                {tool}
            </span>
            ))}
        </div>

        <div className="demo mt-4" style={project.demo === '' ? {display:'none'}:{}}>
            Demo: <a href={project.demo} className={`${theme.experience.links} text-[15px]`}>{project.demo}</a>
        </div>
        <div className="demo mt-2" style={project.code === '' ? {display:'none'}:{}}>
            Code: <a href={project.code} className={`${theme.experience.links} text-[15px]`}>{project.code}</a>
        </div>
        </VerticalTimelineElement>
    );
};

ProjectCard.propTypes = projectCardProps;
export default ProjectCard