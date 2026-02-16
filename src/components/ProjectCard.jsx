// REACT COMPONENTS
import { memo } from "react";
import { Tooltip } from "@mui/material";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";

// PLUGIN
import { VerticalTimelineElement } from "react-vertical-timeline-component";

// UTILITIES
import { projectCardProps } from "../utils/prop-types";
import FloatingCard from "./FloatingCard";

const ProjectCard = memo(function ProjectCard({ project }) {
  const theme = useTheme();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme.experience.cardBackground,
        color: theme.experience.cardText,
        position: "relative"
      }}
      contentArrowStyle={{
        borderRight: `7px solid  ${theme.experience.cardDot}`,
      }}
      date={project.role}
      iconStyle={{ background: theme.experience.cardDot }}
      icon={<div className="flex justify-center items-center w-3/5 h-3/5" />}

    >
      <div className="relative">
        {project.image !== "" && (
          <img src={project.image} alt="" className="my-10 w-4/5 m-auto" loading="lazy" />
        )}
        <h3 className="text-[24px] font-bold">{project.name}</h3>
        <p className={`text-[16px]`}>{project.description}</p>

      </div>

      <div className="mt-5 flex gap-2 items-center flex-wrap">
        {project.tools.map((tool, index) =>
          tool?.icon === null ? (
            <span
              key={`project-tool-${index}`}
              className={`hover:scale-105 transition-all duration-300 ease-in-out cursor-crosshair text-white-100 text-[15px] px-2 mx-2 tracking-wider ${theme.experience.skillDot} flex items-center justify-center rounded-xl`}
              style={{ color: theme.experience.cardHeadingText }}
            >
              {tool?.label}
            </span>
          ) : (
            <div
              key={`project-tool-${index}`}
              className={`group relative hover:scale-105 transition-all duration-300 ease-in-out p-1 ${theme.experience.skillDot} rounded-xl`}
              style={{ color: theme.experience.cardHeadingText }}
            >
              {tool?.icon}

              <span
                className="absolute -top-1 left-1/2 -translate-x-1/2 translate-y-full bg-black text-white text-[12px] px-2 py-1 rounded pointer-events-none opacity-0
              transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-100">
                {tool?.label}
              </span>
            </div>
          )
        )}
      </div>

      <div
        className="demo mt-4 font-space_mono"
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
        className="demo mt-2 font-space_mono"
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
