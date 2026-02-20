// REACT COMPONENTS IMPORTS
import { memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { useTheme } from "styled-components";

// CUSTOMIZED COMPONENTS
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO/SEO";
import ProjectCard from "@/components/ProjectCard";

// UTILS
import { themeProps } from "@/utils/prop-types";
import { baseURL, projects, realisations } from "@/utils";

// STYLES
import PrimaryHeading from "../components/Headings/Primary";
import { tests } from "../utils";

const Projects = memo(function Projects() {
  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <main
      className="projects py-20 w-full flex flex-col justify-center items-center"
      style={{
        backgroundColor: `${theme.colors.bg}`,
        color: `${theme.colors.text}`,
      }}
    >
      <Breadcrumb label="projects" to="/projects" />
      <SEO
        title={`Essi Junior's portfolio - Projects`}
        description="This is Essi Junior's portfolio website projects page. Here you can view all my work."
        name="Essi Junior"
        type="projects"
        link={`${baseURL}/projects`}
      />
      <aside>

        <PrimaryHeading text={t("projects")} subText={t("p1")} once />

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} project={project} />
            ))}
          </VerticalTimeline>
        </div>
      </aside>
      <aside>
        <PrimaryHeading text={t("p3")} subText={t("p2")} className={"mt-24"} />

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {realisations.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                project={project}
                theme={theme}
              />
            ))}
          </VerticalTimeline>
        </div>
      </aside>

      <aside>
        <PrimaryHeading text={t("p4")} subText={t("p5")} className={"mt-24"} />


        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {tests.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                project={project}
                theme={theme}
              />
            ))}
          </VerticalTimeline>
        </div>
      </aside>

    </main>
  );
})

Projects.propTypes = themeProps;
export default Projects;
