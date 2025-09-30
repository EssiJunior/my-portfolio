// REACT COMPONENTS
import { memo } from "react";
import { useTheme } from "styled-components";

// PLUGIN
import { VerticalTimelineElement } from "react-vertical-timeline-component";

// UTILITIES
import { projectCardProps } from "../utils/prop-types";

const ProjectCard = memo(function ProjectCard({ project }) {
  const theme = useTheme();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme.experience.cardBackground,
        color: theme.experience.cardText,
      }}
      contentArrowStyle={{
        borderRight: `7px solid  ${theme.experience.cardDot}`,
      }}
      date={project.date}
      iconStyle={{ background: theme.experience.cardDot }}
      icon={<div className="flex justify-center items-center w-3/5 h-3/5" />}
    >
      <div>
        {project.image !== "" && (
          <img src={project.image} alt="" className="my-10 w-4/5 m-auto" loading="lazy"/>
        )}
        <h3 className="text-[24px] font-bold">{project.name}</h3>
        <p className={`text-[16px] font-semibold`}>{project.description}</p>
      </div>

      <div className="mt-5 list-disc space-y-2 flex flex-wrap">
        {project.tools.map((tool, index) =>
          typeof tool === "string" ? (
            <span
              key={`project-tool-${index}`}
              className={`hover:scale-105 transition-all duration-300 ease-in-out cursor-crosshair text-white-100 text-[15px] px-2 mx-2 tracking-wider ${theme.experience.skillDot} flex items-center justify-center rounded-xl`}
              style={{ color: theme.experience.cardHeadingText }}
            >
              {tool}
            </span>
          ) : (
            <span
              key={`project-tool-${index}`}
              className={`hover:scale-105 transition-all duration-300 cursor-crosshair text-white-100 text-[10px] mx-2 p-2 w-15 tracking-wider ${theme.experience.skillDot} flex items-center justify-center rounded-2xl`}
              style={{ color: theme.experience.cardHeadingText }}
            >
              {tool}
            </span>
          )
        )}
      </div>

      <div
        className="demo mt-4"
        style={project.demo === "" ? { display: "none" } : {}}
      >
        Demo:{" "}
        <a
          href={project.demo}
          className={`${theme.experience.links} text-[15px]`}
        >
          {project.demo}
        </a>
      </div>
      <div
        className="demo mt-2"
        style={project.code === "" ? { display: "none" } : {}}
      >
        Code:{" "}
        <a
          href={project.code}
          className={`${theme.experience.links} text-[15px]`}
        >
          {project.code}
        </a>
      </div>
    </VerticalTimelineElement>
  );
})

ProjectCard.propTypes = projectCardProps;
export default ProjectCard;
